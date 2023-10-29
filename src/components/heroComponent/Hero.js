import React from 'react';

import Button from '../../assets/buttons/Button'
import '../heroComponent/hero.scss';

function Hero() {
  return (
    <>
    <div className='hero-Section'>
    {/* <video src={video} autoPlay loop muted  /> */}
<div className='hero-inner'>
 
        <h1>Get Started as a New-User</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius 
        </p>
        <Button />
    </div>
    </div>
    </>
  )
}

export default Hero