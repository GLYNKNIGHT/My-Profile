import ProjectCard from "../ProjectCard/ProjectCard";
import Projects from "../Projects/projects";

export default function ProjectDisplay ({className}) {
 return <div className={className}>
    {Projects.map((item) => {
    return (
      <ProjectCard
        key= {item.id}
        title={item.title}
        img={item.img}
        link={item.link}
      />
      )

})}
</div>
}