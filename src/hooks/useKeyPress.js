import { useEffect } from 'react'

/**
 * @param {string} key 
 * @param {(e: KeyboardEvent) => void} handler
 */
export function useKeyPress(key, handler) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === key) handler(e)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [key, handler])
}
