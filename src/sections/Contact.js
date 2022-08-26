import SectionTitle from '../components/SectionTitle';
import Button from '../navigation/Button';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <SectionTitle sectionNumber='03.' title='Contact' />
      <div className='contact-section'>
        <h1>Reach out and let's connect.</h1>
        <p>
          Send any questions or comments you might have and I'll get back to
          you.
        </p>
        <Button anchor goto={`mailto:${'relarr@uw.edu'}`} big>
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default Contact;
