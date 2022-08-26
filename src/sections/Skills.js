import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import frontEndIcon from '../assets/monitor.svg';
import backEndIcon from '../assets/server.svg';
import databaseIcon from '../assets/database.svg';
import deploymentIcon from '../assets/upload-cloud.svg';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <SectionTitle sectionNumber='01.' title='Skills' />
      <div className='skills-section'>
        <Card>
          <img src={frontEndIcon} alt='front-end' />
          <h2>Front End</h2>
          <h4>Javascript</h4>
          <h4>React</h4>
          <h4>Angular</h4>
          <h4>CSS / Sass</h4>
        </Card>
        <Card>
          <img src={backEndIcon} alt='back-end' />
          <h2>Back End</h2>
          <h4>Node.js</h4>
          <h4>Express.js</h4>
          <h4>Python</h4>
          <h4>C++</h4>
        </Card>
        <Card>
          <img src={databaseIcon} alt='database' />
          <h2>Databases</h2>
          <h4>MongoDB</h4>
          <h4>SQL</h4>
          <h4>PostgreSQL</h4>
          <h4>MS Access</h4>
        </Card>
        <Card>
          <img src={deploymentIcon} alt='deployment' />
          <h2>Deployment</h2>
          <h4>Docker</h4>
          <h4>AWS</h4>
          <h4>Git</h4>
          <h4>Firebase</h4>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
