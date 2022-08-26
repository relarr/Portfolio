import './Logo.css';

const Logo = ({ letter }) => {
  return (
    <div className='logo'>
      <a href='#home'>
        <div className='span-logo'>
          <p className='derotate'>{letter}</p>
        </div>
      </a>
    </div>
  );
};

export default Logo;
