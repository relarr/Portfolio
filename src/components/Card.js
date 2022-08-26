import './Card.css';

const Card = ({ children, wide }) => {
  return <div className={wide ? 'card wide' : 'card'}>{children}</div>;
};

export default Card;
