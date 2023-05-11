import React from "react";
import MyContext from "./comp/context/contexto";
import HomePage from "./pages/homePage";
import "./style.css"
export default function App() {
  return (
    <MyContext>
      <HomePage/>
    </MyContext>
  );
}
