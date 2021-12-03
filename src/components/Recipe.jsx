import React from "react"
import deliRecipe from "../logo/receta.png"
import "../styles/landingPages.scss"


const Recipe = () =>{
 return(
     <>
      <section className="contain">
          <div className="contain__img">
           <img src={deliRecipe} alt="brand" />
          </div>
          <div className="contain__description">
           <h1> Recetas EKCO</h1>
          
           <div className="contain__ingredients">
           <h3>Camarones al mojo de ajo</h3>
           
               <p className="contain__ingredients__title">Ingredientes:</p>

         <p className="contain__ingredients__text" >Lorem Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and 
           scrambled it to make a type specimen book.</p>
           
           
           <p className="contain__ingredients__ver">VER TODO</p>
           
          </div>
          
          </div>
          

      </section>
     
     
     </>
 )
}

export default Recipe