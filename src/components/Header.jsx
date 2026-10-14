import { useTheme } from '../hooks/useTheme'
import { useFavorites } from '../hooks/useFavorites'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const { favorites } = useFavorites()

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-logo">🪐</span>
        <div>
          <h1>Celebrity Explorer DEISAM</h1>
          <p>Figuras reales que transformaron la historia</p>
        </div>
      </div>
      <div className="actions">
        <span className="pill">★ {favorites.length} favoritos</span>
        <button className="pill icon-btn" onClick={toggleTheme} aria-label="Cambiar tema">
          {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </div>
    </header>
  )
}

export default Header
