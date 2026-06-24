export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep px-5 py-8 text-white/55 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Vicente Balmaceda · HR-Tech MBA Portfolio</p>
        <p>Desarrollo Organizacional · Formación · People Analytics · Tecnología</p>
      </div>
    </footer>
  )
}
