import Icon from './Icon'

export default function Impact({ profile }) {
  return (
    <section id="impacto" className="bg-mist px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow-blue">EXPERIENCIA APLICADA</p>
            <h2 className="heading-xl mt-4">Desarrollo organizacional con foco en impacto real.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-steel lg:justify-self-end">
            Aquí comparto parte de mi recorrido profesional, mostrando cómo combino recursos humanos, desarrollo de equipos y herramientas digitales para mejorar procesos y experiencias.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.impactCards.map((card) => (
            <article key={card.title} className="rounded-[1.7rem] border border-line bg-white p-6 shadow-lift transition hover:-translate-y-1 hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bluebrand/10 text-bluebrand">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-black tracking-[-0.03em] text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
