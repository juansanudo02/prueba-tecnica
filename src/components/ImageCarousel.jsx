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
            <Slider {...settings} >
              {images.map((item) => (
                <div key={item.id}>
                  <img src={item.src}  alt={item.alt}  />
                  <h1 className="carousel__item__title">Título</h1>
                  <p className="carousel__item__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p className="carousel__item__view"><ins>VER</ins> TODO</p>
                  <p className="border__yellow">___</p>
                </div>
              ))}
            </Slider>
            
            
          </div>
        
        
      );
    
}

export default ImageCarousel
