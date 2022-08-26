import './BurgerButton.css';

const BurgerButton = ({ onClick }) => {
  return (
    <button className='burger-button' onClick={onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerButton;
