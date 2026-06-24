import Icon from './Icon'

export default function Contact({ profile }) {
  return (
    <section id="contacto" className="bg-mist px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <p className="eyebrow-blue">Contacto / CV / LinkedIn</p>
          <h2 className="heading-xl mt-4">Experiencia en RRHH con mirada de desarrollo y tecnología.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            Enfocado en roles de liderazgo en formación, desarrollo organizacional, transformación HR, people analytics y proyectos internos con impacto transversal.
          </p>
        </div>

        <div className="rounded-[2rem] border border-line bg-white p-6 shadow-elegant">
          <div className="flex items-center gap-4">
            <img src="/assets/vicente-balmaceda.jpg" alt="Vicente Balmaceda" className="h-16 w-16 rounded-2xl object-cover" />
            <div>
              <h3 className="text-2xl font-black tracking-[-0.04em] text-navy">{profile.name}</h3>
              <p className="mt-1 text-sm font-bold text-steel">{profile.role}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {['Formación y Desarrollo Organizacional', 'HR-Tech, LMS, IA y automatización', 'People Analytics y dashboards'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-mist p-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-bluebrand text-white"><Icon name="check" className="h-4 w-4" /></span>
                <span className="text-sm font-black text-navy">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
