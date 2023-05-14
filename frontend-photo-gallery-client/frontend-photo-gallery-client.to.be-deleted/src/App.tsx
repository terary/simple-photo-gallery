import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { SlideShow, FadeShow } from './components/SlideShow';

const srUrls = [
  'https://farm6.staticflickr.com/5229/5601598963_729a9185a2_z.jpg',
  'https://www.aleenta.com/wp-content/uploads/2022/03/aleenta-Songkran_Water_Festival.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg'
]



function App() {

  return (
    // <SlideShow />
    <FadeShow />
    // <div className="App">
    // </div>
  );
}

export default App;
