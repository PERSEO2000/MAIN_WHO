import React,{ useContext } from "react"
import { context } from "./context/contexto"
import { lanBody } from "./DATA/lanBody.js"
import "./css/lanBody.css"
const LanBody = () => {
  let { languaje,display,setDisplay } = useContext(context)
  return (
    <div className="lanbody" style={display ? {display: "flex"} : {display: "none"}}>
      <div className="data">
        <button onClick={() => setDisplay(false)}>X</button>
        <h1>{lanBody[languaje].name}</h1>
        <img src={lanBody[languaje].img}/>
        <p>{lanBody[languaje].datail}</p>
      </div>
    </div>
  )
}
export default LanBody






