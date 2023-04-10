import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Project from '../components/Project';
import projects from '../util/projects';
import otherProjects from '../util/other-projects';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <SectionTitle sectionNumber='02.' title='Projec0000000' />
      <div className='projects-section'>
        {projects.map((project) => (
          <Project
            key={project.id}
            inverted={project.id % 2 === 0}
            image={project.image}
            website={project.website}
            extra={project.extra}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            linkIcons={project.linkIcons}
            links={project.links}
          />
        ))}
      </div>
      <div className='other-projects'>
        <h2>Other Interesting Projects</h2>
        <div className='other-projects-section'>
          {otherProjects.map((otherProject) => (
            <Card wide key={otherProject.id}>
              <h3>{otherProject.title}</h3>
              <div className='project-image'>
                <a href={otherProject.website} target='_blank' rel='noreferrer'>
                  <img src={otherProject.image} alt={otherProject.image_alt} />
                </a>
              </div>
              <h4>{otherProject.description}</h4>
              <p>{otherProject.technologies}</p>
              <div className='other-projects-links'>
                {otherProject.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.link}
                    target='_blank'
                    rel='noreferrer'>
                    <img src={link.img} alt={link.img_alt} />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
