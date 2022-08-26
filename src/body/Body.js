import Home from '../sections/Home';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import { CSSTransition } from 'react-transition-group';
import './Body.css';

const Body = () => {
  return (
    <div className='body'>
      <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
        <Home />
      </CSSTransition>

      <Skills />
      <Projects />
      <Contact />
      <Footer content='Copyright &copy; Erick Larrea' />
    </div>
  );
};

export default Body;
