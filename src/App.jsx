import { useState } from 'react'
import './App.css'
import Index from './Index';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Primeiro from './Primeiro';
import Segundo from './Segundo';
import Terceiro from './Terceiro';
import Quarto from './Quarto';
import Quinto from './Quinto';

function App() {

  return (
    <BrowserRouter>
    
      <Routes> 
        <Route path="/" element={ <Index />} />
        <Route path="/desafio1" element={ <Primeiro />} />
        <Route path="/desafio2" element={ <Segundo />} />
        <Route path="/desafio3" element={ <Terceiro />} />
        <Route path="/desafio4" element={ <Quarto />} />
        <Route path="/desafio5" element={ <Quinto />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
