import React from 'react'
import { useState, useEffect } from 'react';


export default function Overview({ city, country }) {
  const location = `${city},+${country}`; const mapsUrl = `https://www.google.com/maps?q=${location}`;
  return (
    <div className=' w-3/4'>
      <div>
        <p className=' font-semibold text-lg border-b-2 pb-1 border-black  inline-block '>A propos</p>
        <p className='text-sm  mt-4'>Je suis un enseignant dévoué et passionné, avec un fort accent sur la création d'expériences d'apprentissage engageantes et interactives. Je m'épanouis en aidant les élèves à gagner en confiance et à développer un amour pour l'apprentissage grâce à des méthodes d'enseignement innovantes. Je crois en l'apprentissage continu et en l'inspiration de mes élèves pour qu'ils atteignent leur plein potentiel.</p>
      </div>
      <div>
       <p className=' font-semibold text-lg border-b-2 mt-12 pb-1 border-black  inline-block '>Education</p>
        <div className='mt-4 flex gap-6  items-start'>
           <p className=''>2011-2015</p>
           <p>Licence en Éducation (B.Ed.) en Éducation Primaire à l'Université de ABC. <br /> Diplômé avec distinction. Spécialisation en Développement de l'Enfant et Stratégies d'Apprentissage.</p>
        </div>
      </div>
      <div className=' mt-12'>
       <p className=' font-semibold text-lg border-b-2 pb-1 border-black  inline-block '>Experience</p>
       <div className=' mt-4'>
        <p>Maple Elementary School</p>
        <div className=' flex flex-col ml-2'>
            <p>Grade 4 Teacher | Sep 2019 – Present</p>
            <li>Develop and deliver lesson plans in line with state curriculum standards</li>
            <li>Foster a supportive and inclusive classroom environment.</li>
            <li>Use creative activities to enhance student understanding of math, science, and language arts</li>
        </div>
        <p className=' mt-3'>Riverside Academy</p>
        <div className='flex flex-col ml-2'>
            <p>Grade 3 Teacher | Aug 2015 – Aug 2019</p>
            <li>Designed engaging class projects to develop critical thinking and collaboration skills</li>
            <li>Established effective communication channels with parents for student success</li>
            <li>Mentored new teachers and led professional development workshops.</li>
        </div>
       </div>
      </div>
      </div>
  )
}
