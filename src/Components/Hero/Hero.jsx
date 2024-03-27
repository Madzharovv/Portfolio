import React from 'react';


import images from '../../Constants/images';
import './Hero.css';


const Hero = () => (
  <div>
 <div className='HeroSectionContainer'>
   
    <div className='FaceSection'> 
  
	<img className='headProfile' height="250px" src={images.headProfile} alt="faceImage" />
    </div>
  
   
    <div className='DescriptionSection'>
        <h1>Name: Valentin Madzharov</h1>
        <h2>Occupation: Front-End Developer</h2> 
       </div>

    
 </div>
 </div>


);

export default Hero;
