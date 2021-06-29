
import logo from "../../assets/images/educAccion3.png";

import './header.css';


function Header() {
  return (

    <header className="row1 align  items-center text-center text-md-start">
    <div className="logo">
    <img className="img-fluid" src={logo} />   
    </div>

     <div id="botones" >
    <button className="boton1" type="submit" value="registro1"> Registrarse</button>
    <button className="boton2" type="submit" value="usuario"> Ingresar</button>
    </div>
     </header>
 
  );
}


export default Header;

