import React, { useState } from 'react'
import Code from '../../icons/Code'
import ProjectCard from './ProjectCard'
import SubTitle from '../SubTitle'

const PROJECTS = [
  {
    title: 'MC Skin Stealer',
    description:
      'Este proyecto es una herramienta sencilla y eficiente para descargar skins de Minecraft. Permite a los usuarios buscar y descargar skins directamente a su dispositivo para usarlas en el juego.',
    img: '/screenshots/mc-stealer.png',
    tags: 'React CSS',
    url: 'https://mc-skin-stealer.netlify.app',
    git: 'https://github.com/raychavezdev/mc-skin-stealer',
  },
  {
    title: 'Jexux Web',
    description:
      'Página web para el canal de YouTube @JexuxGG. La página muestra los videos más recientes del canal, junto con información adicional sobre el creador, sus redes sociales y formas de contacto.',
    img: '/screenshots/jexux.png',
    tags: 'Astro Javascript Tailwind',
    url: 'https://jexuxgg.netlify.app',
    git: 'https://github.com/raychavezdev/jexuxgg',
  },
  {
    title: 'Chuck Norris Facts',
    description:
      'Una aplicación web desarrollada con React que muestra frases aleatorias de Chuck Norris utilizando la API de Chuck Norris, manejando estados con React Hooks y peticiones asincronas con Async/Await. ',
    img: '/screenshots/chuck.png',
    tags: 'React Tailwind',
    url: 'https://chuckrandomfacts.netlify.app',
    git: 'https://github.com/raychavezdev/chuck-facts',
  },
  {
    title: 'Hangman Game',
    description:
      'Un juego del ahorcado que desafía tus habilidades con 10 niveles. Cada nivel presenta un desafío diferente, y al completar los 10 niveles, se desbloquea un modo hardcore para los jugadores más audaces. ',
    img: '/screenshots/hangman.png',
    tags: 'HTML CSS Javascript',
    url: 'https://hangmanplus.netlify.app',
    git: 'https://github.com/raychavezdev/hangman',
  },
  {
    title: 'MC Skin Stealer',
    description:
      'Este proyecto es una herramienta sencilla y eficiente para descargar skins de Minecraft. Permite a los usuarios buscar y descargar skins directamente a su dispositivo para usarlas en el juego.',
    img: '/screenshots/mc-stealer.png',
    tags: 'React CSS',
    url: 'https://mc-skin-stealer.netlify.app',
    git: 'https://github.com/raychavezdev/mc-skin-stealer',
  },
  {
    title: 'Jexux Web',
    description:
      'Página web para el canal de YouTube @JexuxGG. La página muestra los videos más recientes del canal, junto con información adicional sobre el creador, sus redes sociales y formas de contacto.',
    img: '/screenshots/jexux.png',
    tags: 'Astro Javascript Tailwind',
    url: 'https://jexuxgg.netlify.app',
    git: 'https://github.com/raychavezdev/jexuxgg',
  },
  {
    title: 'Jexux Web',
    description:
      'Página web para el canal de YouTube @JexuxGG. La página muestra los videos más recientes del canal, junto con información adicional sobre el creador, sus redes sociales y formas de contacto.',
    img: '/screenshots/jexux.png',
    tags: 'Astro Javascript Tailwind',
    url: 'https://jexuxgg.netlify.app',
    git: 'https://github.com/raychavezdev/jexuxgg',
  },
  {
    title: 'Jexux Web',
    description:
      'Página web para el canal de YouTube @JexuxGG. La página muestra los videos más recientes del canal, junto con información adicional sobre el creador, sus redes sociales y formas de contacto.',
    img: '/screenshots/jexux.png',
    tags: 'Astro Javascript Tailwind',
    url: 'https://jexuxgg.netlify.app',
    git: 'https://github.com/raychavezdev/jexuxgg',
  },
]

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(4)
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 4)
  }
  const showLessProjects = () => {
    setVisibleProjects(4)
  }

  return (
    <section id="projects">
      <SubTitle>
        <Code /> Proyectos
      </SubTitle>
      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="mt-8 text-center transition-transform will-change-transform hover:scale-105">
        {visibleProjects < PROJECTS.length ? (
          <button onClick={loadMoreProjects}>Ver más</button>
        ) : (
          <a href="#projects">
            <button onClick={showLessProjects}>Ver menos</button>
          </a>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
