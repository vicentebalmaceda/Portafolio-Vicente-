import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Impact from './components/Impact'
import ProjectGrid from './components/ProjectGrid'
import ProjectDetail from './components/ProjectDetail'
import Method from './components/Method'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { profile } from './data/profile'
import { projects } from './data/projects'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash?.replace('#proyecto-', '')
      if (!id || id === window.location.hash) return
      const match = projects.find((project) => project.id === id)
      if (match) setSelectedProject(match)
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const selectProject = (project) => {
    setSelectedProject(project)
    window.history.pushState(null, '', `#proyecto-${project.id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setSelectedProject(null)
    if (window.location.hash?.startsWith('#proyecto-')) {
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  const scrollProjects = () => {
    goHome()
    setTimeout(() => document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  if (selectedProject) {
    return (
      <>
        <Header onHome={goHome} />
        <ProjectDetail project={selectedProject} projects={projects} onBack={goHome} onSelectProject={selectProject} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header onHome={goHome} />
      <main>
        <Hero profile={profile} onProjects={scrollProjects} />
        <Impact profile={profile} />
        <ProjectGrid projects={projects} onSelect={selectProject} />
        <Method profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </>
  )
}
