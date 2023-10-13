import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  const decrementarContador = () => {
    setNumClics(numClics - 1)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Incrementar'
          esBotonDeClic='boton-clic'
          manejarClic={manejarClick}
        />
        <Boton
          texto='Decrementar'
          esBotonDeClic='boton-decrementar'
          manejarClic={decrementarContador}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic='boton-reiniciar'
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
