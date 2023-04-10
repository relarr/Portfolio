import { useState, useEffect } from 'react';
import bpImg from '../assets/blueprint.png';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [textHasChanged, setTextHasChanged] = useState(false);
  const [random, setRandom] = useState(250 - Math.random() * 99);

  const options = ['Web Developer', 'Software Engineer', 'Web Designer'];

  const write = () => {
    let index = number % options.length;
    let changedText = textHasChanged
      ? options[index].substring(0, text.length - 1)
      : options[index].substring(0, text.length + 1);

    setText(changedText);

    if (textHasChanged) setRandom((prev) => prev / 2);

    if (!textHasChanged && changedText === options[index]) {
      setTextHasChanged(true);
      setRandom(2000);
    } else if (textHasChanged && changedText === '') {
      setTextHasChanged(false);
      setNumber(number + 1);
      setRandom(500);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      write();
    }, random);

    return () => clearInterval(timer);
  });

  return (
    <div className='home'>
      <div className='home-image'>
        <img src={bpImg} alt='banner' />
      </div>
      <div className='home-text'>
        <p>hello, world!</p>
        <h2>Erick Larrea.</h2>
        <h1 text-end='|'>{text}</h1>
      </div>
    </div>
  );
};

export default Home;
