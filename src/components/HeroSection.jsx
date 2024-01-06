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
  backgroundRepeat:'no-repeat',
  backgroundSize: 'cover',
}
const slideImages = [
  {
    url: '/crausal1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '/crausal2.jpg',
    caption: 'Slide 2'
  },
  {
    url: '/crausal3.jpg',
    caption: 'Slide 3'
  },
];

const HeroSection = () => {
    return (
      <div className="slide-container">
        <Slide duration={4000}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='h-[40vh] md:h-[80vh]' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, backgroundPosition:'center' }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default HeroSection