import React from 'react'
import BlankImage from '../logo/mostsold.png'
const Characters = () => {
    return (
        <section className="final">
            <div className="final__questions">
                <h1>Pregunta 1              +</h1>
                <h1>Pregunta 2              +</h1>
                <h1>Pregunta 3              +</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                   accusantium doloremque laudantium, totam rem aperiam, eaque 
                   ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                   quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                   consequuntur magni dolores eos qui ratione voluptatem sequi
                   nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                   sit amet, consectetur, adipisci velit, sed quia non numquam eius 
                   modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                   voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                   ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                   consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                   velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
                   eum fugiat quo voluptas nulla pariatur?</p>
            </div>
            <div className="final__characters">
                <div className="final__characters__img"><h1>Personajes</h1>
                <img src={BlankImage}></img>
                </div>
                <div className="final__character__rickandmorty">
                    <h3>Nombre:</h3>
                    <h3>Género:</h3>
                    <h3>Primeros 5 episodios</h3>
                </div>
            </div>
        </section>
    )
}

export default Characters
