import { useMemo, useState } from 'react'
import Icon from './Icon'
import { categories } from '../data/projects'

export default function ProjectGrid({ projects, onSelect }) {
  const [active, setActive] = useState('todos')

  const filtered = useMemo(() => {
    if (active === 'todos') return projects
    return projects.filter((project) => project.category === active)
  }, [active, projects])

  const featured = filtered.filter((project) => project.featured)
  const rest = filtered.filter((project) => !project.featured)
  const ordered = [...featured, ...rest]

  return (
    <section id="proyectos" className="bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow-blue">Casos seleccionados</p>
            <h2 className="heading-xl mt-4">Proyectos ordenados por impacto.</h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                  active === category.id
                    ? 'border-bluebrand bg-bluebrand text-white shadow-blueglow'
                    : 'border-line bg-white text-navy hover:border-bluebrand/40 hover:bg-mist'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ordered.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => onSelect(project)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onClick }) {
  return (
    <button onClick={onClick} className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-line bg-white text-left shadow-lift transition hover:-translate-y-1 hover:border-bluebrand/40 hover:shadow-elegant">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
        <img src={project.image} alt={project.title} loading="lazy" className="image-clean h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy/65 to-transparent"></div>
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-bluebrand shadow-lift backdrop-blur">{project.categoryLabel}</span>
        {project.featured && <span className="absolute bottom-4 left-4 rounded-full bg-bluebrand px-3 py-1 text-xs font-black text-white shadow-blueglow">Caso clave</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.18em] text-steel">
          <span>{project.label}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-navy">{project.title}</h3>
        <p className="clamp-3 mt-3 leading-7 text-steel">{project.oneLine}</p>
        <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
          <span className="text-sm font-black text-navy">Ver caso</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white transition group-hover:bg-bluebrand">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </button>
  )
}
