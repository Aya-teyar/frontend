import React from 'react';
import Carte from './Carte';

const LevelMatiere = ({ level, matiere, cards }) => {
    return (
        <div className=''>
            <h2 className="text-xl font-semibold mt-12 mb-6 ">{`${level} > ${matiere}`}</h2>
            <div className="flex  justify-start items-start gap-4">
                {cards.map((card, index) => (
                    <div key={index} className=" ">
                        <Carte
                            img={card.img}
                            groupe={card.groupe}
                            jours={card.jours}
                            heure={card.heure}
                            niveau={card.niveau}
                            matiere={card.matiere}
                            prix={card.prix}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LevelMatiere;
