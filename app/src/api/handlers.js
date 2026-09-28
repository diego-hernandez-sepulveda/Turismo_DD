import { delay, http, HttpResponse } from 'msw'
import { cursosIniciales } from './data.js'

// Esta lista vive en memoria: se resetea al recargar la página.
const cursos = [...cursosIniciales]

export const handlers = [
  http.get('/api/cursos', async ({ request }) => {
    const url = new URL(request.url)

    await delay(700)

    if (url.searchParams.get('error') === '1') {
      return HttpResponse.json(
        { message: 'El servidor no respondió' },
        { status: 500 },
      )
    }

    return HttpResponse.json(cursos)
  }),

  http.post('/api/cursos', async ({ request }) => {
    await delay(500)

    const body = await request.json()
    const nombre = body.nombre?.trim()
    const docente = body.docente?.trim()

    if (!nombre) {
      return HttpResponse.json(
        { message: 'El nombre del curso es obligatorio' },
        { status: 400 },
      )
    }

    const curso = {
      id: crypto.randomUUID(),
      nombre,
      docente: docente || 'Por asignar',
      cupos: 30,
    }

    cursos.unshift(curso)
    return HttpResponse.json(curso, { status: 201 })
  }),
]