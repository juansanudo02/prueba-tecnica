import React, { useEffect, useState } from "react";
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Brand from '../../components/Brand'
import Recipe from '../../components/Recipe'
import ImageCarousel from '../../components/ImageCarousel'
import Characters from "../../components/Characters";

//plugin Slick Slider
const images = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 2,
    
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 6,
    
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 9,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 10,
    
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 11,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 12,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 13,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 14,
    
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 15,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  {
    id: 16,
    src: "https://i.pinimg.com/736x/5f/ea/98/5fea987eba55ba6bb06e563bda789218.jpg",
    alt:"Título"
  },
  
];

const LandingPagesCont = () => {
    
  const[characters, setCharacters] = useState([])
  const initialUrl =  "https://rickandmortyapi.com/api/character/"


  const fetchCharacters = (url) =>{
    fetch(url)
      .then(response => response.json())
      .then(data => {
       const resultado = data.results 
       setCharacters(resultado[0])
      })
      .catch(error => console.log(error))
  }

  useEffect(() =>{
    fetchCharacters(initialUrl)
  },[])


    return (
        <div className="landing__body">
            <Header />
            <Brand />
            <Banner/>
            <Recipe />    
             <ImageCarousel images={images} />
             <Characters characters={characters}/>         
        </div>
    )
}

export default LandingPagesCont
