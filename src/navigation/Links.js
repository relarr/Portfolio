import Button from './Button';
import resumePdf from '../assets/Larrea_Resume.pdf';
import './Links.css';

const Links = ({ onClick }) => {
  return (
    <ul className='links'>
      <li>
        <a href='#skills' onClick={onClick}>
          <span className='link-no'>01.</span> Skills
        </a>
      </li>
      <li>
        <a href='#projects' onClick={onClick}>
          <span className='link-no'>02.</span> Projects
        </a>
      </li>
      <li>
        <a href='#contact' onClick={onClick}>
          <span className='link-no'>03.</span> Contact
        </a>
      </li>
      <li>
        <Button anchor goto={resumePdf}>
          Resume
        </Button>
      </li>
    </ul>
  );
};

export default Links;
