import { useFavorites } from '../hooks/useFavorites'

function FavoritesPanel() {
  const { favorites, removeFavorite, clearFavorites } = useFavorites()

  return (
    <aside className="panel aside">
      <div className="section-head">
        <h2>Favoritos</h2>
        {favorites.length > 0 && (
          <button className="card-btn" onClick={clearFavorites}>
            Vaciar
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <p className="muted">Marca personas con ☆ para guardarlas aquí.</p>
      ) : (
        <ul className="fav-list">
          {favorites.map((f) => (
            <li key={f.id} className="fav-item">
              <img src={f.image} alt={f.name} />
              <div>
                <strong>{f.name}</strong>
                <span>{f.profession}</span>
              </div>
              <button className="remove" onClick={() => removeFavorite(f.id)} aria-label={`Quitar a ${f.name}`}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default FavoritesPanel
