import { useEffect, useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

async function enableMocking() {
  // En este demo MSW queda activo para que el front funcione sin backend.
  // Cuando exista una API real: VITE_ENABLE_MSW=false
  if (import.meta.env.VITE_ENABLE_MSW === 'false') {
    return
  }

  const { worker } = await import('./mocks/browser.js')

  return worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
