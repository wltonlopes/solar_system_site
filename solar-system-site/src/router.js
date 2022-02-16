import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import SpaceObject from "./components/SpaceObject";

function Rotas(){
  return(
    <Routes>
      <Route path="/" element={<Cards/>} />
      <Route path="/:id" element={<SpaceObject/>} />
    </Routes>
);
}
export default Rotas;