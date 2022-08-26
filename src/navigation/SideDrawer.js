import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = ({ show, onClick, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={200}
      classNames='slide-in'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer'>
        <button className='exit-button' onClick={onClick}>
          x
        </button>
        {children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
