const ProjectCard = ({ title, description, image }) => (
    <div className="p-4 lg:p-8 border rounded shadow-md">
      <img src={image} alt={title} className="mb-4 w-full h-40 object-cover" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
  
  export default ProjectCard;