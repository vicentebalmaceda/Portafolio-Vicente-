import Icon from './Icon'

export default function Method({ profile }) {
  return (
    <section id="metodo" className="bg-navy px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-skybrand">Método de trabajo</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Claridad, foco y soluciones aplicables.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-sky-50/70">
              Mi enfoque es transformar desafíos de recursos humanos en soluciones claras, aplicables y sostenibles, integrando desarrollo organizacional, datos y tecnología cuando aportan valor real.
            </p>
          </div>

          <div className="grid gap-4">
            {profile.method.map((item) => (
              <article key={item.step} className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:bg-white/[0.10]">
                <div className="flex gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-lg font-black text-bluebrand">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-2 leading-7 text-sky-50/68">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-skybrand">Stack y foco profesional</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">Herramientas al servicio de Personas.</h3>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-3xl lg:justify-end">
              {profile.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/10 px-3 py-2 text-xs font-black text-white/86">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
