import Icon from './Icon'

export default function Hero({ profile, onProjects }) {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-blue-mesh px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-soft-grid bg-[length:58px_58px] opacity-25"></div>
      <div className="absolute -bottom-24 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-mist to-transparent"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-sky-100 shadow-blueglow backdrop-blur">
            <Icon name="spark" className="h-4 w-4 text-skybrand" /> Psicólogo · MBA · HR-Tech
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
            Personas, DO, formación y tecnología en una sola propuesta.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-sky-50/76 sm:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onProjects} className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-navy shadow-blueglow transition hover:-translate-y-0.5 hover:bg-sky-100">
              Ver proyectos de impacto <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a href="#contacto" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/15">
              Descargar / usar en CV
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.proofPoints.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur">
                <p className="text-2xl font-black tracking-tight text-white">{item.value}</p>
                <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-sky-100/55">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
            <div className="rounded-[1.6rem] bg-white p-5 text-navy">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <img src="/assets/vicente-balmaceda.jpg" alt="Vicente Balmaceda" className="h-24 w-24 shrink-0 rounded-3xl object-cover shadow-lift" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-bluebrand">Personal brand</p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">HR-Tech MBA</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-steel">{profile.positioning}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  ['Formación', 'Diseño programas que conectan aprendizaje con desempeño.'],
                  ['Data', 'Traduzco indicadores de RRHH en conversación ejecutiva.'],
                  ['Tech', 'Construyo experiencias web, LMS y automatizaciones aplicadas a Personas.']
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-line bg-mist p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-2xl bg-bluebrand text-white"><Icon name="check" className="h-4 w-4" /></span>
                      <div>
                        <p className="font-black text-navy">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-steel">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-3xl bg-navy p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-skybrand">En una frase</p>
                <p className="mt-2 text-xl font-black leading-tight tracking-[-0.03em]">{profile.signature}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
