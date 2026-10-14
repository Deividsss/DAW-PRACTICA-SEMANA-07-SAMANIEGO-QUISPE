import { memo } from 'react'

/**
 * Tarjeta de una figura histórica memoizada.
 * @param {Object} props
 * @param {Object} props.character - Figura del catálogo local.
 * @param {boolean} props.isFavorite - Si está marcado como favorito.
 * @param {Function} props.onToggle - Recibe la persona y alterna el favorito.
 * @param {Function} props.onSelect - Recibe el id y abre el detalle.
 */
const CharacterCard = memo(function CharacterCard({ character, isFavorite, onToggle, onSelect }) {
  const { id, name, image, profession, area, nationality } = character

  return (
    <article className="card">
      <div className="card-img">
        <img src={image} alt={name} loading="lazy" />
        <span className="area-badge">{character.isAlive ? 'Vive' : area}</span>
        <button
          className={isFavorite ? 'fav-btn active' : 'fav-btn'}
          onClick={() => onToggle(character)}
          aria-label={isFavorite ? `Quitar a ${name} de favoritos` : `Añadir a ${name} a favoritos`}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p className="muted">
          {profession}
        </p>
        <p className="muted">📍 {nationality}</p>
        <button className="card-btn" onClick={() => onSelect(id)}>
          Ver detalle
        </button>
      </div>
    </article>
  )
})

export default CharacterCard
