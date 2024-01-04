import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  // background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '550px'
}
const slideImages = [
  {
    url: '../../public/crausal1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '../../public/crausal1.jpg',
    caption: 'Slide 2'
  },
  {
    url: '../../public/crausal1.jpg',
    caption: 'Slide 3'
  },
];

const HeroSection = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, backgroundPosition:'center' }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default HeroSection