import React from 'react';
import one from '../../assets/images/one.jpg'
import two from '../../assets/images/two.jpg'
import three from '../../assets/images/three.jpg'
import four from '../../assets/images/four.jpg'
import { FaArrowRight } from "react-icons/fa";

import '../cardsComponent/cards.scss';

function Cards() {
  return (
    <>
    <section className="home-cards">
    <div className='card'>
        <div className='card-upper'>
            <h1>Card 1</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                 document or a typeface without relying on meaningful content.</p>
        </div>
        <div className='card-lower'>
        < FaArrowRight />
        </div>
    </div>
    <div className='card'>
        <div className='card-upper'>
            <h1>Card 1</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                 document or a typeface without relying on meaningful content.</p>
        </div>
        <div className='card-lower'>
        < FaArrowRight />
        </div>
    </div>
    <div className='card'>
        <div className='card-upper'>
            <h1>Card 1</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                 document or a typeface without relying on meaningful content.</p>
        </div>
        <div className='card-lower'>
        < FaArrowRight />
        </div>
    </div>
    <div className='card'>
        <div className='card-upper'>
            <h1>Card 1</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                 document or a typeface without relying on meaningful content.</p>
        </div>
        <div className='card-lower'>
        < FaArrowRight />
        </div>
    </div>
    </section>

    </>
  )
}

export default Cards