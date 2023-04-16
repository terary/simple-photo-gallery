
import React from 'react';
import logo from './logo.svg';
// import './App.css';

type AnImageProps = {
  srcUrl: string
}

export function AnImage({srcUrl}: AnImageProps) {
  return (
    <div className="image-div-wrapper">
        <img src={srcUrl} className="image" alt="logo" />
    </div>
  );
}
