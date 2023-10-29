import React from 'react'
// import Nav from '../../components/navComponent/Nav'
import Hero from '../../components/heroComponent/Hero'
import Cards from '../../components/cardsComponent/Cards'
import Three from '../../components/threeComponent/Three'
import Footer from '../../components/footerComponent/Footer'



import './home.scss'
function Home() {
  return (
    <>
    <div className='main'>
    {/* <Nav /> */}
<Hero />
<Cards />
<Three />
<Three />
<Three />
</div>
<Footer />
    </>
  )
}

export default Home