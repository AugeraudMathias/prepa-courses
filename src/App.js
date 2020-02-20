import React from 'react';
import './App.css';
import logo from './Logo.png'

import Formulaire from './components/Formulaire';

window.onscroll = function() {scrollNav()};
function scrollNav(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("navbar").style.backgroundColor = "#000000";
  }else{
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
};

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h1><a href="index.html">All Run</a></h1>
        <ul>
          <li><a href="#test">Link</a></li>
          <li><a href="#test">Link</a></li>
          <li><a href="#test">Link</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={logo} alt="Logo"/>
        <a href="#form">Démarrer préparation</a>
      </header>
      <div className="section-about">
        <div className="container">
          <div className="column">
            <h2>Qui sommes nous ?</h2>
            <p>All Run est un site qui permet aux utilisateurs de générer des programmes de préparation pour une course type marathon ou trail.<br/><br/>Nos programmes sont calculés en fonction de votre VMA, de la distance de la course et du temps que vous souhaitez réaliser.</p>
            <a href="#test">* En savoir plus sur la VMA</a>
          </div>
        </div>
      </div>
      <Formulaire />
      <footer>
        <p>Design by AUGERAUD Mathias | all rights reserverds</p>
      </footer>
    </div>
  );
}

export default App;
