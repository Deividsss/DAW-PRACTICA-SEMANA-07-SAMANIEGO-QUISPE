import { memo, useState } from 'react'

function PropsChild({ value }) {
  return (
    <div className="lab-box">
      Hijo con props: <strong>{value}</strong>
    </div>
  )
}

const StaticChild = memo(function StaticChild() {
  return <div className="lab-box">Hijo sin props (memo)</div>
})


function RenderLab() {
  const [count, setCount] = useState(0)

  return (
    <section className="panel lab">
      <div className="section-head">
        <h2>Laboratorio de render</h2>
      </div>
      <p className="muted">
        Pulsa el botón y observa en el Profiler qué componentes se vuelven a renderizar.
      </p>
      <div className="lab-row">
        <button className="btn" onClick={() => setCount((c) => c + 1)}>
          Contador: {count}
        </button>
        <PropsChild value={count} />
        <StaticChild />
      </div>
    </section>
  )
}

export default RenderLab
