import Tag from './Tag'
import Eye from '../../icons/Eye'
import Github from '../../icons/Github'
import ProjectBtn from './ProjectBtn'

const ProjectCard = ({ title, description, img, tags, url, git }) => {
  const arrayTags = tags.split(' ')

  return (
    <article className="relative rounded-lg bg-zinc-300 bg-gradient-to-br from-zinc-300 to-zinc-200 p-4 text-gray-950 shadow-sm shadow-gray-900 dark:bg-zinc-800 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900/50 dark:text-gray-200">
      <img
        className="rounded-lg shadow-sm shadow-gray-900"
        src={img}
        alt={`Screenshot del proyecto ${title}`}
      />
      <h3 className="mb-2 mt-3 text-xl font-semibold">{title}</h3>
      <div className="mb-3 flex gap-1">
        {arrayTags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
      <p className="text-clampDes">{description}</p>
      <div className="mt-4 flex items-center justify-end gap-2 rounded-lg">
        <ProjectBtn
          colors="bg-blue-400 transition-colors hover:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          url={url}
        >
          <Eye w="20" h="20" />
          Ver
        </ProjectBtn>
        <ProjectBtn
          colors="bg-slate-400 transition-colors hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
          git={git}
        >
          <Github w="20" h="20" />
          Github
        </ProjectBtn>
      </div>
    </article>
  )
}

export default ProjectCard
