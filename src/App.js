import './App.css';
import Navigation from './components/navigation/Navigation';
import {useState} from 'react';
import Fire from './components/Fire';
import Water from './components/Water';
import Rock from './components/Rock';
import Electric from './components/Electric';

function App() {
  const [poke, setPoke] = useState(<h1 className='title'>Presiona un boton</h1>);

  const handlerPoke = (num) => {
    if(num === 1) {
      setPoke(<Fire />)
    } else if(num === 2) {
      setPoke(<Water />)
    } else if(num === 3) {
      setPoke(<Rock />)
    } else if(num === 4) {
      setPoke(<Electric />)
    }
  }

  return (
    <div className="App">      
      <Navigation pokeFn={handlerPoke} />
        {
          poke
        }
        
    </div>
  );
}

export default App;
