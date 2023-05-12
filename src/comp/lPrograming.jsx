import React,{ useContext,useEffect } from "react"
import { context } from "./context/contexto"
import "./css/lPrograming.css"
import { lanHome } from "./DATA/lanHome.js"
const Lprograming = () => {
  let { setLanguaje,setDisplay } = useContext(context)
  return (
    <div className="lenguajes">
      {
        lanHome.map((lan) => {
          return (
            <div className="lenguaje">
            <div className="">
              <img onClick={() => {
                setLanguaje(lan.id)
                setDisplay(true)
              }} src={lan.img}/>
            </div>
            <div>
              <h6>{lan.name}</h6>
            </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Lprograming












