import React from 'react'
import Navbar from './components/Navbar';
import './App.css'
import SobreNos from './components/SobreNos';
import PorQueInvestir from './components/PorQueInvestir';
import Produtos from './components/Produtos';
import Orcamento from './components/Orcamento';
import Rodape from './components/Rodape';
/*************  ✨ Windsurf Command ⭐  *************/
/*******  695f9985-4793-4074-bc55-eab8fc2adefe  *******/
function App() {
return (
  <div className="App">
   
    <h1>Energia Solar 365</h1>
    <p>Economize com o sol. Invista no seu futuro!</p>
       <Navbar />
       <SobreNos />
        <PorQueInvestir />
        <Produtos />
        <Orcamento />
        <Rodape />
      
  </div>

)
}

export default App;
