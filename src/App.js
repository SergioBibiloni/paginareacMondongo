import logo from './logo.svg';
import './App.css';
import Producto from './componentes/cosa';
import'./componentes/cosa.css';

function NumAl(max,min){
  var num = Math.floor((Math.random() * 1000) + 0); 
  document.write(num);
}

function App() {
  return (
   <body>


    <div className='imagenmondongo'>
    <Producto imagen="http://images3.memedroid.com/images/UPLOADED101/5f71f5cf73c53.jpeg" />
    <Producto imagen="http://images3.memedroid.com/images/UPLOADED101/5f71f5cf73c53.jpeg" />
    </div>

    <div className='bloquedescripcion'>
    <Producto descripcion=" MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)  MONDONGO  >:)    "/>
    </div>

      <div className='boton'>
      <button type="submit" onClick={NumAl}>Submit</button>
      </div>


    </body>
  );
}

export default App;
