import './SectionTitle.css';

const SectionTitle = ({ sectionNumber, title }) => {
  return (
    <div className='title'>
      <p>{sectionNumber}</p>
      <h2>{title}</h2>
      <div className='line'></div>
    </div>
  );
};

export default SectionTitle;
