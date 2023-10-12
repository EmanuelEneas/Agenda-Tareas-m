
import './App.css';
import logoTareas from'./imagenes/logo.00.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className= 'aplicacion-tareas'>
    <div  className='logo-contenedor-tareas'> 
    <img 
    src={logoTareas}  className='logo-tareas' />

      </div>
      <div className='lista-tareas'>
        <h1>
        mis tareas
        </h1>
       <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
