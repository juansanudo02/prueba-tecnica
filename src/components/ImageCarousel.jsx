import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




  

function ImageCarousel({images}) {

  
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        lazyLoad: true
      };
     

      
      return (
     
          <div className="carousel__Item">
               <h1>Los más vendidos</h1>
            <Slider {...settings} >
              {images.map((item) => (
                <div key={item.id} className="carousel__Item__slider">
                  <img src={item.src}  alt={item.alt} width="273.13px" height="261.79" />
                  <p className="carousel__item__title">Título</p>
                  <p className="carousel__item__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p className="carousel__item__view"><ins>VER</ins> TODO</p>
                  
                </div>
              ))}
            </Slider>
            
            
          </div>
        
        
      );
    
}

export default ImageCarousel
