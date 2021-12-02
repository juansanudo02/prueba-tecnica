import React from "react"
import principalBanner from "../logo/eckoBanner.png"
import "../styles/landingPages.scss"

const Banner = () =>{
 return(
     <>
      <section className="banner__ekco">
          <img src={principalBanner} alt="principalBanner" />
      </section>
     </>
 )
}

export default Banner