import '../styles/globals.css'

import Credict from '@/components/credict';
//Esto es una Función Flecha. las funciones siempre deben devolver algo en este caso devuelven el contenido a mostar en la pagina.
const Home =()=>{
  return(
    <div className="text-center font-bold text-xl text-blue-400">
      <Credict/>
    </div>
  )
}

//Una funcion para usarse siempre debe exportarse.
export default Home;