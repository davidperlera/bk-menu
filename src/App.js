import React from 'react';
// Componentes funcionales
// Todos aquellos que pueden escribirse como una funcion de JS,
// de preferencia una funcion arrow

import Navbar from './Components/Navbar'
import Menu from './Components/Menu'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Menu />
    </div>
  );
}

// Los componentes siempre deben de exportarse para trabajar con ellos
// en otras ubicaciones
export default App;