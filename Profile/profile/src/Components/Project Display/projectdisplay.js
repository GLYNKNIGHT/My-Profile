import ProjectCard from "../ProjectCard/ProjectCard";
import Projects from "../Projects/projects";
import BandIts from '../BandIts.PNG'
import Med from '../Med.PNG'
import ToDo from '../ToDo.png'
import GetaNote from '../GetaNote.PNG'

export default function ProjectDisplay ({className}) {
 return <section className={className}>
      <ProjectCard
        title={Projects[0].title}
        img={Med}
        link={Projects[0].link}
      />
      <ProjectCard
        title={Projects[1].title}
        img={ToDo}
        link={Projects[1].link}
      />
      <ProjectCard
        title={Projects[2].title}
        img={BandIts}
        link={Projects[2].link}
      />
      <ProjectCard
    
        title={Projects[3].title}
        img={GetaNote}
        link={Projects[3].link}
      />
      
</section>
}