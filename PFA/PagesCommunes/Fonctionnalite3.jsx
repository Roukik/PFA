import React from 'react'
import '../PagesCommunes/stylePC/Fonctionnalite3.css'
import image4 from '../PagesCommunes/ImagePC/image4.svg'

function Fonctionnalite3() {
  return (
    <div className='Fonctionnalite3'>

      <div className='haut3'>
        <img src={image4} alt="" className="image4" />
      </div>

      <div className='bas3'>
         
          <div className='contenu'>
          <h1>Plan 2D </h1>
          <p>Décryptez et analysez efficacement les composants ainsi que la disposition de chaque pièce et élément à l’aide de notre plan 2D.</p>
          </div>
      </div>

    </div>
  )
}

export default Fonctionnalite3