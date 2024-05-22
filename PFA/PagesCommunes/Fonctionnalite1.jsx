import React from 'react'
import '../PagesCommunes/stylePC/Fonctionnalite1.css'
import image2 from '../PagesCommunes/ImagePC/image2.svg'

function Fonctionnalite1() {
  return (
    <div className='Fonctionnalite1'>

      <div className='haut1'>
        <img src={image2} alt="" className="image2" />
      </div>

      <div className='bas1'>
         
          <div className='contenu'>
          <h1>Assistant organisationelle </h1>
          <p>Une fonctionnalité qui simplifie le partage de données entre les divers départements de l'entreprise, encourageant ainsi une collaboration harmonieuse et productive. En outre, elle assure une compréhension approfondie de la structure de chaque projet, favorisant une traçabilité renforcée grâce à l'engagement de tous les membres de l'équipe.</p>
          </div>
      </div>

    </div>
  )
}

export default Fonctionnalite1