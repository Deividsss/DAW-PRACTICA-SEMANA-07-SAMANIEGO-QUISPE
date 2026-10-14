import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  return saved === 'light' || saved === 'dark' ? saved : 'dark'
}

/**
 * Provee el tema global (dark/light) y lo persiste en localStorage.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // Efecto secundario: sincroniza el DOM y el almacenamiento con el estado
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  // useMemo evita crear un objeto nuevo en cada render (igualdad referencial)
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
