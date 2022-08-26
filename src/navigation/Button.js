import './Button.css';

const Button = ({ children, onClick, anchor, goto, big }) => {
  if (anchor)
    return (
      <a
        id={big ? 'button big' : 'button'}
        className={big ? 'button big' : 'button'}
        href={goto}
        target='_blank'
        rel='noreferrer'
      >
        {children}
      </a>
    );

  return (
    <button className={big ? 'button big' : 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
