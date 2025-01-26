import React from 'react';
import AffichagePhoto from './AffichagePhoto';

const Carte = ({ groupe, jours, heure, niveau, matiere, prix, img }) => (
  <div className=' border-2 border-[#559268] rounded-xl'>
    <div className=' ml-4 mr-4 mt-4 mb-4 '>
      <div className=' flex items-center gap-3 '>
      <img src={img} alt={`Image du groupe ${groupe}`} className=" rounded-xl h-16 w-16 object-cover " />
      <div>
          <p >Groupe {groupe}</p>       
          <p className=' mt-0.5 text-sm text-gray-500 '>{jours}</p>
          <p className=' mt-0.5 text-sm text-gray-500'>{heure}</p>
      </div>
      </div>
      <div className=' flex items-start justify-between gap-6 mt-5'>
        <div className=' flex '><p>{niveau},</p> <p>{matiere}</p></div>
        <p className='text-red-600'>{prix} DA</p>
      </div>
      <div className='mt-4 flex   items-start  justify-between '>
        <AffichagePhoto/>
        <p>+16 more </p>
      </div>
      <div className=' flex items-center justify-center  mt-7  active:scale-[.98] active:duration-75 transition-all  ease-in-out bg-[#559268] rounded-xl '>
          <button className='  text-lg p-1  font-semibold text-white '>
            Register
          </button>
      </div>
    </div>
  </div>
);

export default Carte;


/*<div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img src={img} alt={`Image du groupe ${groupe}`} className="w-full h-32 object-cover mb-2" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Groupe {groupe}</div>
      <p className="text-gray-700 text-base">{jours}</p>
      <p className="text-gray-700 text-base">{heure}</p>
      <p className="text-gray-700 text-base">{niveau}, {matiere}</p>
      <p className="text-gray-700 text-base">{prix} DZ</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">S'inscrire</button>
    </div>
  </div>*/