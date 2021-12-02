import React from "react"
import Ekco from "../logo/EKCO.png"
import "../styles/brand.scss"

const Brand = () =>{
 return(
     <>
      <section className="brand__ekco">
          <img src={Ekco} alt="brand" />
      </section>
     </>
 )
}

export default Brand