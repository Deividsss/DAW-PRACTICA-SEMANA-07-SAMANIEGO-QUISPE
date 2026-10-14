import { useEffect, useState } from 'react'

/**
 * Hook personalizado para pedir JSON con cancelación automática.
 * @param {string} url - URL a consultar.
 * @returns {{data: any, loading: boolean, error: string|null}}
 */
export function useFetch(url) {
  const [result, setResult] = useState({ url: null, data: null, error: null })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`)
        const data = await response.json()
        setResult({ url, data, error: null })
      } catch (err) {
        if (err.name === 'AbortError') return
        setResult({ url, data: null, error: err.message })
      }
    }

    load()
    return () => controller.abort()
  }, [url])

  // "loading" se deriva: la respuesta guardada no corresponde aún a la URL actual
  const loading = result.url !== url

  return {
    data: result.data, // conserva los datos anteriores mientras llegan los nuevos
    error: loading ? null : result.error,
    loading,
  }
}
