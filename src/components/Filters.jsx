/**
 * Barra de búsqueda y filtros.
 * @param {Object} props
 * @param {string} props.query - Texto de búsqueda.
 * @param {Function} props.onQueryChange
 * @param {string} props.area - Filtro de disciplina.
 * @param {string[]} props.areas - Disciplinas disponibles.
 * @param {Function} props.onAreaChange
 * @param {string} props.sort - Orden.
 * @param {Function} props.onSortChange
 * @param {Function} props.onClear - Limpia filtros y devuelve el foco.
 * @param {React.RefObject} props.inputRef - Ref del input (foco sin re-render).
 */
function Filters({
  query,
  onQueryChange,
  area,
  areas,
  onAreaChange,
  sort,
  onSortChange,
  onClear,
  inputRef,
}) {
  return (
    <div className="filters">
      <div className="search">
        <input
          ref={inputRef}
          className="input"
          type="text"
          placeholder="Buscar por nombre, disciplina..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <kbd>/</kbd>
      </div>

      <select className="select" value={area} onChange={(e) => onAreaChange(e.target.value)}>
        <option value="all">Todas las disciplinas</option>
        {areas.map((availableArea) => (
          <option key={availableArea} value={availableArea}>
            {availableArea}
          </option>
        ))}
      </select>

      <select className="select" value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Orden original</option>
        <option value="az">Nombre A → Z</option>
        <option value="za">Nombre Z → A</option>
      </select>

      <button className="btn btn-ghost" onClick={onClear}>
        Limpiar
      </button>
    </div>
  )
}

export default Filters
