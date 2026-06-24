import { useEffect, useMemo, useState } from 'react'
import Icon from './Icon'

export default function ProjectDetail({ project, projects, onBack, onSelectProject }) {
  const [image, setImage] = useState(project.gallery?.[0] || project.image)

  useEffect(() => {
    setImage(project.gallery?.[0] || project.image)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [project])

  const related = useMemo(() => {
    return projects.filter((item) => item.id !== project.id && item.category === project.category).slice(0, 2)
  }, [project, projects])

  return (
    <main className="min-h-screen bg-mist pt-24">
      <section className="px-5 py-8 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-black text-navy shadow-lift transition hover:border-bluebrand/40 hover:bg-white">
            ← Volver al portafolio
          </button>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-elegant">
              <div className="overflow-hidden rounded-[1.55rem] bg-mist">
                <img src={image} alt={project.title} className="image-clean max-h-[620px] w-full object-contain" />
              </div>
              {project.gallery?.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                  {project.gallery.map((item) => (
                    <button key={item} onClick={() => setImage(item)} className={`h-20 w-28 shrink-0 overflow-hidden rounded-2xl border bg-mist transition ${image === item ? 'border-bluebrand ring-4 ring-bluebrand/12' : 'border-line hover:border-bluebrand/40'}`}>
                      <img src={item} alt="Miniatura del proyecto" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <article className="rounded-[2rem] border border-line bg-white p-6 shadow-elegant lg:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-bluebrand/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-bluebrand">{project.categoryLabel}</span>
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-steel">{project.year}</span>
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-navy sm:text-5xl">{project.title}</h1>
              <p className="mt-4 text-xl font-bold leading-8 text-bluebrand">{project.detailTitle}</p>
              <p className="mt-5 text-lg leading-8 text-steel">{project.oneLine}</p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <InfoBlock title="Desafío" text={project.context} />
                <InfoBlock title="Solución" text={project.result} />
              </div>

              <div className="mt-8">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-steel">Impacto para RRHH</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.impact.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-line bg-mist p-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bluebrand text-white"><Icon name="check" className="h-4 w-4" /></span>
                      <span className="text-sm font-black text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-steel">Skills aplicados</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-line bg-white px-3 py-2 text-xs font-black text-navy">{skill}</span>
                  ))}
                </div>
              </div>

              <p className="mt-8 rounded-3xl border border-dashed border-bluebrand/25 bg-bluebrand/5 p-4 text-sm font-semibold leading-6 text-steel">{project.note}</p>
            </article>
          </div>

          {related.length > 0 && (
            <div className="mt-10 rounded-[2rem] border border-line bg-white p-6 shadow-lift">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="eyebrow-blue">Casos relacionados</p>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-navy">Más evidencia en la misma línea</h2>
                </div>
                <button onClick={onBack} className="rounded-full bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-bluebrand">Ver todos</button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {related.map((item) => (
                  <button key={item.id} onClick={() => { setImage(item.gallery?.[0] || item.image); onSelectProject(item) }} className="flex items-center gap-4 rounded-3xl border border-line bg-mist p-3 text-left transition hover:border-bluebrand/40 hover:bg-white">
                    <img src={item.image} alt={item.title} className="h-20 w-24 shrink-0 rounded-2xl object-cover" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-bluebrand">{item.categoryLabel}</p>
                      <p className="mt-1 font-black leading-tight text-navy">{item.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function InfoBlock({ title, text }) {
  return (
    <div className="rounded-3xl border border-line bg-mist p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-bluebrand">{title}</p>
      <p className="mt-3 leading-7 text-steel">{text}</p>
    </div>
  )
}
