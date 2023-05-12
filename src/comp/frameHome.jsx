import React from "react"
import "./css/frameHome.css"
import { franeHome } from "./DATA/lanHome.js"

const FrameBody = () => {
  return (
    <div className="framebody">
      <div>
        {
          franeHome.map((frame) => {
            return (
              <div>
                <img src={frame.img}/>
                <h6>{frame.name}</h6>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default FrameBody