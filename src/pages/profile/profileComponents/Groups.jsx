import React, { useState } from 'react';
import LevelMatiere from './LevelMatiere';

export default function Groups() {
    const [elements, setElements] = useState({
        'Niveau 1': {
            'Matière 1': [
                { groupe: '01', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 1', matiere: 'Matière 1', prix: '1500', img: './src/assets/R.jpeg' },
                { groupe: '02', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 1', prix: '1500',img:'./src/assets/R.jpeg' }, 
                { groupe: '03', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 2', prix: '1500',img:'./src/assets/R.jpeg' }
            ],
        },
        'Niveau 2': {
            'Matière 1': [
                { groupe: '01', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matière 1', prix: '1500', img: './src/assets/R.jpeg' },
                { groupe: '02', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 1', prix: '1500',img:'./src/assets/R.jpeg' }, 
                { groupe: '03', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 2', prix: '1500',img:'./src/assets/R.jpeg' }
            ],
            'Matière 2': [
                { groupe: '01', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matière 2', prix: '1500', img: './src/assets/R.jpeg' },
                { groupe: '02', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 1', prix: '1500',img:'./src/assets/R.jpeg' }, 
                { groupe: '03', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 2', prix: '1500',img:'./src/assets/R.jpeg' }
            ]
        },
        
    });

    return (
        <div className="  ">
            {Object.keys(elements).map(level => (
                <div key={level} className=''>
                    {Object.keys(elements[level]).map(matiere => (
                        <LevelMatiere
                            key={matiere}
                            level={level}
                            matiere={matiere}
                            cards={elements[level][matiere]}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

/*import React from 'react'
import Carte from './Carte'
export default function Groups() {
    const elements = [ 
      
        { groupe: '01', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 1', matiere: 'Matiere 1', prix: '1500',img:'./pic4.svg'}, 
        { groupe: '01', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 1', prix: '1500',img:'./pic4.svg' }, 
        { groupe: '01', jours: 'Vendredi - Dimanche', heure: '10:30 AM', niveau: 'Niveau 2', matiere: 'Matiere 2', prix: '1500',img:'./pic4.svg' }, ];
  return (
    <div className="  flex gap-10    justify-start items-start   ">
     {elements.map((element, index) => (
        <Carte 
        key={index} 
        img={element.img} 
        groupe={element.groupe} 
        jours={element.jours} 
        heure={element.heure} 
        niveau={element.niveau} 
        matiere={element.matiere} 
        prix={element.prix}
       /> ))} 
    </div>
  )
}
*/