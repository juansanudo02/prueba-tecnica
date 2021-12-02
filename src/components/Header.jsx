import React from "react"
import "../styles/header.scss"
import logo from "../logo/logo.jpg"
import user from "../icon/user.png"
import minicart from "../icon/minicart.png"

const Header = () =>{
 return(
     <>
      <header className="header">
                <div className="header__add">
                <p className="header__add__text">ENVÍO GRATIS EN PEDIDOS DESDE $699</p>
              </div>
        <nav>       
       
        <img src={logo} alt="menu" className="navbar__logo"/>

        <div className="navbar-left">
         

          <ul>
              <li >
                  <a href="/">Cocción</a>
              </li>

              <li >
                <a href="/">Preparación</a>
            </li>

            <li >
                <a href="/">Mesa y accesorios</a>
            </li>

            <li >
                <a href="/">Consumibles</a>
            </li>

            <li >
                <a href="/">Electrodomesticos</a>
            </li>

            <li >
                <a href="/">Línea profesional</a>
            </li>
          </ul>

        </div>

        
        <div className="navbar__right">
             <ul>
               
                <li className="navbar__user">
                    <img src={user}  alt="user" />
                    <img src={minicart}  alt="minicart" />
                                      
                </li>
                <li className="navbar__minicart">
                   
                                      
                </li>
                
            </ul>
            
        </div>
    </nav>
          
      </header>
     </>
 )
}

export default Header