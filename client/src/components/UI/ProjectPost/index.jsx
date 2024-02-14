const ProjectPost = ({ project }) => {
  return (
    <div className="project-post">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.status}</p>
      <p>{project.created_at}</p>
    </div>
  )
}

export default ProjectPost;