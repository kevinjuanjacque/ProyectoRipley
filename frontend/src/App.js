
import { Body } from './Body';
import {AiOutlineShopping} from 'react-icons/ai';
import {  useState } from 'react';
import { UseContext } from './hooks/useContext';
function App() {
  const [productos, setproductos] = useState([]);
  
  return (
    <>
    <UseContext.Provider value={{productos, setproductos}}>
      <nav className="navbar navbar-dark sticky-top">
        <h1 className="navbar-brand" >Ripley proyect</h1>
          
        <h1 className="text-white navbar-brand"><AiOutlineShopping size="50" align="rigth"  color="white" /><small className="shopp-box mb-2">{(productos) ? productos.length : 0}</small></h1>
        
      </nav>
      <Body />

    </UseContext.Provider>
    </>
   
  );
}

export default App;
