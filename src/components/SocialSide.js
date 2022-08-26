import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import './SocialSide.css';

const SocialSide = () => {
  return (
    <div className='social-side'>
      <a href='https://github.com/relarr' target='_blank' rel='noreferrer'>
        <img src={githubIcon} alt='github' />
      </a>
      <a
        href='https://www.linkedin.com/in/erick-larrea-45652b1b4/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={linkedinIcon} alt='linkedin' />
      </a>
      <div className='vertical-line'></div>
    </div>
  );
};

export default SocialSide;
