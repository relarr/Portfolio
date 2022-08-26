import NavBar from './navigation/NavBar';
import Body from './body/Body';
import Left from './body/Left';
import Right from './body/Right';
import './App.css';

function App() {
  return (
    <div className='app' id='home'>
      <NavBar />
      <Body />
      <Left />
      <Right />
    </div>
  );
}

export default App;
