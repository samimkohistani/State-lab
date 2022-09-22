import React, {useState} from "react";
import './App.css';
import imagesArr from './ImageData';

function App() {
const [bigImage, setBigImage] = useState(imagesArr[0].img);

const handleClick = (imgUrl) =>{setBigImage(imgUrl)};

const images = imagesArr.map((image, index)=>{
  return(
    <img className="thumb"
    src={image.img}
    alt={image.city}
    key={index}
    onClick={() =>{handleClick(image.img)}}
    />
  );
});

  return (
    <div className="App">
      <h1>Cities of the World</h1>
      <div className="wrapper">
        <div className="thumbnails">
        {images}
      </div>
        {<img id="bigimage" src={bigImage}/>}
      </div>
</div>
  );
};

export default App;