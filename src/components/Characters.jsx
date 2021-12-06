import React from 'react'


const texto = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

const Characters = ({ characters = []}) => {
 
    return (<>
       
        <section className="final">
            <div className="final__questions">
          
        
          {/* menu de preguntas */}
            <label ><span>Pagina 1</span></label>               
            
            <ul className="slide">
                <li><a href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</a></li>   
            </ul>

            <label for="touch"><span>Pagina 2</span></label>               
            <ul className="slide">
                <li >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</li>   
            </ul>
            <label for="touch"><span >Pagina 3</span></label>      
            <input type="checkbox" id="touch"/>          
          

            <ul className="slide">
                <li className="final__questions__text">
                    <a href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                     accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                      illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                      voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                      quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                      voluptas nulla pariatur?</a></li>   
            </ul>          
            
            </div>
{/* personajes conectados por la api */}
            <div className="final__characters">   
                            
                            <div  className="col">
                            
                                <div>
                                    <h4>Personaje</h4>
                                    <img src={characters.image} alt="ricky"/>
                                </div>                    
                         
                                </div>  
                    <div className="final__character__rickandmorty">
                            <p className="final__character__rickandmorty__name">Nombre: {characters.name}</p>
                            <p>Genero: {characters.gender}</p>
                            <p className="final__character__rickandmorty__episode" >Primero 5 episodios:</p> 
                        <div class="final__character__episodies">
                           {characters?.episode?.map((e, inx) => {
                             if( inx <= 4){
                                 return (
                                    <ul>
                                      <li>{e} </li>
                                    
                                    </ul>
                                 )
                             }
                            })
                        }
                  </div>             
               </div>
            </div>
        </section>
        </>
    )
}

export default Characters
