import { useCallback, useMemo, useRef, useState } from 'react'
import { useKeyPress } from './hooks/useKeyPress'
import { useFavorites } from './hooks/useFavorites'
import { PEOPLE } from './data/people'
import Header from './components/Header'
import Filters from './components/Filters'
import FavoritesPanel from './components/FavoritesPanel'
import CharacterCard from './components/CharacterCard'
import CharacterDetail from './components/CharacterDetail'
import RenderLab from './components/RenderLab'

const PAGE_SIZE = 8

function App() {
  const { favorites, toggleFavorite } = useFavorites()

  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [area, setArea] = useState('all')
  const [sort, setSort] = useState('default')
  const [selectedId, setSelectedId] = useState(null)
  const searchRef = useRef(null)

  const areas = useMemo(() => [...new Set(PEOPLE.map((person) => person.area))], [])

  const favoriteIds = useMemo(() => new Set(favorites.map((f) => f.id)), [favorites])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = PEOPLE.filter(
      (person) =>
        (area === 'all' || person.area === area) &&
        [person.name, person.profession, person.area, person.nationality]
          .some((value) => value.toLowerCase().includes(q)),
    )
    if (sort === 'az') return [...list].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'za') return [...list].sort((a, b) => b.name.localeCompare(a.name))
    return list
  }, [query, area, sort])

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pages)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const areaCount = new Set(filtered.map((person) => person.area)).size
  const countryCount = new Set(filtered.map((person) => person.nationality)).size

  const handleClear = useCallback(() => {
    setQuery('')
    setArea('all')
    setSort('default')
    setPage(1)
    searchRef.current?.focus()
  }, [])

  const handleSlash = useCallback((e) => {
    if (document.activeElement !== searchRef.current) {
      e.preventDefault()
      searchRef.current?.focus()
    }
  }, [])

  const handleCloseDetail = useCallback(() => setSelectedId(null), [])

  useKeyPress('/', handleSlash)

  return (
    <div className="app">
      <Header />

      <div className="layout">
        <main>
          <section className="panel">
            <div className="section-head">
              <h2>Personas</h2>
              <span className="muted">
                Página {currentPage} de {pages}
              </span>
            </div>

            <Filters
              query={query}
              onQueryChange={setQuery}
              area={area}
              areas={areas}
              onAreaChange={setArea}
              sort={sort}
              onSortChange={setSort}
              onClear={handleClear}
              inputRef={searchRef}
            />

            <div className="stats">
              <span className="chip">
                Resultados <strong>{filtered.length}</strong>
              </span>
              <span className="chip">
                Disciplinas <strong>{areaCount}</strong>
              </span>
              <span className="chip">
                Nacionalidades <strong>{countryCount}</strong>
              </span>
            </div>

            {visible.length === 0 && (
              <div className="empty">Sin resultados para esos filtros.</div>
            )}

            {visible.length > 0 && (
              <div className="grid">
                {visible.map((person) => (
                  <CharacterCard
                    key={person.id}
                    character={person}
                    isFavorite={favoriteIds.has(person.id)}
                    onToggle={toggleFavorite}
                    onSelect={setSelectedId}
                  />
                ))}
              </div>
            )}

            <div className="pager">
              <button
                className="btn btn-ghost"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                ← Anterior
              </button>
              <span className="muted">
                {currentPage} / {pages}
              </span>
              <button
                className="btn btn-ghost"
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                disabled={currentPage === pages}
              >
                Siguiente →
              </button>
            </div>
          </section>

          <RenderLab />

          <p className="footer">React + Vite · Guía Práctica Semana 07 – UNCP</p>
        </main>

        <FavoritesPanel />
      </div>

      {selectedId !== null && <CharacterDetail id={selectedId} onClose={handleCloseDetail} />}
    </div>
  )
}

export default App
