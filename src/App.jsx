import React, { useState } from 'react'
import  imagenUser  from "../src/assets/images/avatar-jessica.jpeg"
import { Target } from '../src/componets/Target'
import './index.css'

function App() {
  const user = {
    name : "Jessica",
    lastName: "Randall",
    location : "London, United Kingdom",
    desciption: "Front-end developer and avid reader."
  }
  const datosRedes = [
    {
      titulo: "GitHub",
      link : "https://github.com/facchin21"
    },
    {
      titulo: "Frontend Mentor",
      link : "https://www.frontendmentor.io/"
    },
    {
      titulo: "LinkedIn",
      link : "https://www.linkedin.com/in/"
    },
    {
      titulo: "Twitter",
      link : "https://twitter.com/"
    },
    {
      titulo: "Instagram",
      link : "https://www.instagram.com/"
    }
  ]
  
  const [redes, setRedes] = useState(datosRedes)
  return (
    <div className="page-container">
        <div className="bg-neutral-900 flex flex-col items-center justify-center py-10
         rounded-xl px-8 overflow-hidden">
          <img src={imagenUser} alt="Imagen de perfil" className="rounded-full overflow-hidden"/>
          <h1 className="text-3xl text-white pb-2 font-semibold">{user.name} {user.lastName}</h1>
          <h3 className="text-lime-300 text-base font-medium">{user.location}</h3>
          <p className="text-white py-4">"{user.desciption}"</p>
          <div>
            <Target redes={redes}/>
          </div>
        </div>
    </div>
  )
}

export default App
