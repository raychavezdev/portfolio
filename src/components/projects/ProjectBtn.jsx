const ProjectBtn = ({ colors, url, git, children }) => {
  return (
    <a
      href={url || git}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colors} flex items-center justify-center gap-1 rounded-lg px-2 py-1 text-sm`}
    >
      {children}
    </a>
  )
}

export default ProjectBtn
