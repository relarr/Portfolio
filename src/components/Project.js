import './Project.css';

const Project = ({
  image,
  website,
  title,
  description,
  technologies,
  extra,
  linkIcons,
  links,
  inverted,
}) => {
  return (
    <div className={inverted ? 'project project__inverted' : 'project'}>
      <div
        className={
          inverted
            ? 'project-snapshot project-snapshot__inverted'
            : 'project-snapshot'
        }
      >
        <a href={website} target='_blank' rel='noreferrer'>
          <img src={image} alt={image} />
        </a>
      </div>
      <div
        className={
          inverted
            ? 'project-content project-content__inverted'
            : 'project-content'
        }
      >
        <h5>{extra}</h5>
        <h3>{title}</h3>
        <div
          className={
            inverted
              ? 'project-description project-description__inverted'
              : 'project-description'
          }
        >
          <h4>{description}</h4>
        </div>
        <p>{technologies}</p>
        <div
          className={
            inverted ? 'project-links project-links__inverted' : 'project-links'
          }
        >
          {linkIcons.map((icon, index) => {
            const link = links[index];
            return (
              <a key={link} href={link} target='_blank' rel='noreferrer'>
                <img src={icon} alt={icon} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
