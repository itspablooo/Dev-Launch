export default function ProjectPreview({ project }) {
  return (
    <div className="project-preview">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <div>
        <p>{project.description}</p>
        <p>{project.goal}</p>
      </div>
        <p>{project.progress}</p>
    </div>
  );
}