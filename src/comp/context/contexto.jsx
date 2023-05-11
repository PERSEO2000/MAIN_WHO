import React,{ createContext,useState } from "react"

export const context = createContext()

const MyContext = ({children}) => {
  let [languaje,setLanguaje] = useState(0)
  let [display,setDisplay] = useState(false)
  return (
    <context.Provider value={{languaje,setLanguaje,display,setDisplay}}>
      {children}
    </context.Provider>
  )
}
export default MyContext









