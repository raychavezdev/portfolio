import React, { useState } from 'react'
import Code from '../../icons/Code'
import ProjectCard from './ProjectCard'
import SubTitle from '../SubTitle'

const PROJECTS = [
  {
    title: 'MC Skin Stealer',
    description:
      'Este proyecto es una herramienta sencilla y eficiente para descargar skins de Minecraft. Permite a los usuarios buscar y descargar skins directamente a su dispositivo para usarlas en el juego.',
    img: '/screenshots/mc-stealer.webp',
    tags: 'React CSS',
    url: 'https://mc-skin-stealer.netlify.app',
    git: 'https://github.com/raychavezdev/mc-skin-stealer',
  },
  {
    title: 'Jexux Web',
    description:
      'Página web para el canal de YouTube @JexuxGG. La página muestra los videos más recientes del canal, junto con información adicional sobre el creador, sus redes sociales y formas de contacto.',
    img: '/screenshots/jexux.webp',
    tags: 'Astro Javascript TailwindCSS',
    url: 'https://jexuxgg.netlify.app',
    git: 'https://github.com/raychavezdev/jexuxgg',
  },
  {
    title: 'King of Flat',
    description:
      'Página desarrollada para la competencia "King of Flat", la cual muestra información del evento. Los datos se obtienen en tiempo real desde una API creada exclusivamente para este proyecto.',
    img: '/screenshots/kof.webp',
    tags: 'React TailwindCSS',
    url: 'https://kingofflat.netlify.app/',
    git: 'https://github.com/raychavezdev/kingofflat',
  },
  {
    title: 'API King of Flat',
    description:
      'API desarrollada para la competencia "King of Flat", utilizada tanto en una página informativa del evento como en un dashboard de administración para gestionar los datos.',
    img: '/screenshots/kof-api.webp',
    tags: 'PHP MySQL JWT',
    url: 'https://palevioletred-buffalo-273277.hostingersite.com/',
    git: 'https://github.com/raychavezdev/kingofflatAPI',
  },
  {
    title: 'Dashboard King of Flat',
    description:
      'Dashboard de administración para la competencia "King of Flat", donde se pueden gestionar los datos del evento, exportar información a Excel y simular encuentros entre competidores.',
    img: '/screenshots/kof-dashboard.webp',
    tags: 'React TailwindCSS',
    url: '/',
    git: 'https://github.com/raychavezdev/kof-dashboard',
  },
  {
    title: 'Task Manager',
    description:
      'Una aplicación CRUD para la administración de tareas, desarrollada con el stack MERN y estilizada con TailwindCSS. Incluye autenticación de usuarios con JSON Web Tokens (JWT).',
    img: '/screenshots/tasks.webp',
    tags: 'MongoDB Express React Node',
    url: 'https://task-manager-93ob.onrender.com/',
    git: 'https://github.com/raychavezdev/MERN_Task_Manager',
  },
  {
    title: 'Chuck Norris Facts',
    description:
      'Una aplicación web desarrollada con React que muestra frases aleatorias de Chuck Norris utilizando la API de Chuck Norris, manejando estados, Hooks y peticiones asincronas con Async/Await. ',
    img: '/screenshots/chuck.webp',
    tags: 'React TailwindCSS',
    url: 'https://chuckrandomfacts.netlify.app',
    git: 'https://github.com/raychavezdev/chuck-facts',
  },
  {
    title: 'Hangman Game',
    description:
      'Un juego del ahorcado que desafía tus habilidades con 10 niveles. Cada nivel presenta un desafío diferente, y al completar los 10 niveles, se desbloquea un modo hardcore para los jugadores más audaces. ',
    img: '/screenshots/hangman.webp',
    tags: 'HTML CSS Javascript',
    url: 'https://hangmanplus.netlify.app',
    git: 'https://github.com/raychavezdev/hangman',
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
