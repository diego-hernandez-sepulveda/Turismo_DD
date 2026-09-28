import api from './client.js'

export function getConfirmar({ mostraritinerarioConfirmado } = {}) {
  return api.get('/destinos', {
    params: mostraritinerarioConfirmado ? { error: 1 } : undefined,
  })
}
