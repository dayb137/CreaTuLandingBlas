import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Bienvenidos a la tienda hesoterica" />
    </>
  );
};

export default App;
