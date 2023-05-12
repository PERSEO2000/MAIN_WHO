import React from "react"
import "./css/frameHome.css"
import { franeHome } from "./DATA/lanHome.js"

const FrameHome = () => {
  return (
    <div className="framehome">
      <div>
        {
          franeHome.map((frame) => {
            return (
              <div className="frame">
                <div>
                  <img src={frame.img}/>
                </div>
                <div>
                  <h6>{frame.name}</h6>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default FrameHome