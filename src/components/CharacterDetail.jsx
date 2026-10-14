import { PEOPLE } from '../data/people'
import { useKeyPress } from '../hooks/useKeyPress'

/**
 * Modal con el detalle de una figura histórica.
 * @param {Object} props
 * @param {number} props.id - Id de la figura.
 * @param {Function} props.onClose - Cierra el modal (debe ser estable).
 */
function CharacterDetail({ id, onClose }) {
  const person = PEOPLE.find((entry) => entry.id === id)

  useKeyPress('Escape', onClose)

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {person && (
          <>
            <img className="modal-img" src={person.image} alt={person.name} />
            <div className="modal-body">
              <h2>{person.name}</h2>
              <p className="muted">{person.profession}</p>
              <dl className="details">
                <div>
                  <dt>Disciplina</dt>
                  <dd>{person.area}</dd>
                </div>
                <div>
                  <dt>Nacionalidad</dt>
                  <dd>{person.nationality}</dd>
                </div>
                <div>
                  <dt>Época</dt>
                  <dd>{person.lifespan}</dd>
                </div>
                <div>
                  <dt>Aporte destacado</dt>
                  <dd>{person.contribution}</dd>
                </div>
              </dl>
              <p className="person-biography">{person.biography}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CharacterDetail
