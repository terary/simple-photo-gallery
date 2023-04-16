import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AnImage } from './components/AnImage';

const srUrls = [
  'https://farm6.staticflickr.com/5229/5601598963_729a9185a2_z.jpg',
  'https://www.aleenta.com/wp-content/uploads/2022/03/aleenta-Songkran_Water_Festival.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg'
]

type ImageItem = {
  index: number;
  url: string;
  cacheBustHash?: number
}



function App() {
  const [currentImageItem, setCurrentImageItem] = useState({index: 0, url: srUrls[0]} as ImageItem);

  function rotateImage() {
    const newImageItem = {...currentImageItem};
    newImageItem.index += 1;
    if(newImageItem.index>= srUrls.length) {
      newImageItem.index = 0;
    }

    newImageItem.url = srUrls[newImageItem.index];
    newImageItem.cacheBustHash = Date.now()
    console.log(newImageItem);
    setCurrentImageItem(newImageItem)

  }

  useEffect(() => {
    const interval = setInterval(rotateImage, 1000);
    return () => clearInterval(interval);
  }, []);



  // useEffect(() => {
  //   const interval = setInterval(() => {
 
  //     const newImageItem = {...currentImageItem};
  //     newImageItem.index += 1;
  //     if(newImageItem.index>= srUrls.length) {
  //       newImageItem.index = 0;
  //     }

  //     newImageItem.url = srUrls[newImageItem.index];
  //     newImageItem.cacheBustHash = Date.now()
  //     console.log({newImageItem});
  //     setCurrentImageItem(newImageItem)
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);


  return (
    <div className="App">
      <AnImage srcUrl={currentImageItem.url} />
    </div>
  );
}

export default App;
