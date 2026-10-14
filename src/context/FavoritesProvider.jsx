import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { FavoritesContext } from './FavoritesContext'

const FAVORITES_KEY = 'celebrity-explorer-favorites'

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'toggle': {
      const { id, name, image, profession } = action.character
      const exists = state.some((c) => c.id === id)
      if (exists) return state.filter((c) => c.id !== id)
      return [...state, { id, name, image, profession }]
    }
    case 'remove':
      return state.filter((c) => c.id !== action.id)
    case 'clear':
      return []
    default:
      throw new Error(`Acción desconocida: ${action.type}`)
  }
}

function init() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) ?? []
  } catch {
    return []
  }
}

/**
 * Provee la lista de favoritos y las acciones para modificarla.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, [], init)

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  // Callbacks estables: no cambian de referencia entre renders
  const toggleFavorite = useCallback((character) => dispatch({ type: 'toggle', character }), [])
  const removeFavorite = useCallback((id) => dispatch({ type: 'remove', id }), [])
  const clearFavorites = useCallback(() => dispatch({ type: 'clear' }), [])

  const value = useMemo(
    () => ({ favorites, toggleFavorite, removeFavorite, clearFavorites }),
    [favorites, toggleFavorite, removeFavorite, clearFavorites],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
