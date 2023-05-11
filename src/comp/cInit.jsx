import React from "react"
import "./css/cInit.css"
const Cinit = () => {
  return (
    <div className="cinit">
      <div className="cinit_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsdzIr1C1NCAp7tgyvIEop4R4beiG93M1Hw&usqp=CAU"/>
      </div>
      <div className="cinit_details">
        <h1 id="h1">{"{'"}</h1><h1 id="h2">Full</h1><h1 id="h3">Stack</h1><h1 id="h1">{"'}"}</h1>
      </div>
      <div className="cinit_descripcion">
        <div>
          <p>¡Hola! Soy un programador con experiencia en el desarrollo de aplicaciones tanto en el frontend como en el backend. Mi enfoque principal está en el desarrollo de aplicaciones web y los lenguajes de programación que domino son Javascript, Python y Typescript. Además, estoy familiarizado con varios frameworks de desarrollo web, incluyendo React, Vue.js, FastAPI y Django. Me apasiona trabajar en proyectos desafiantes y aprender nuevas tecnologías para mejorar mi trabajo. Estoy comprometido en producir soluciones de alta calidad y eficiencia que satisfagan las necesidades de mis clientes y usuarios finales</p>
        </div>
      </div>
      <div className="cinit_menu">
        <div>
          <button>TIKTOK</button>
        </div>
        <div>
          <button>WHATSAPP</button>
          <button>INSTAGRAME</button>
        </div>
      </div>
    </div>
  )
}
export default Cinit