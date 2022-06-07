import React from 'react'

import FooterI from '../Shared/FooterI'
import Review from '../Swiper/Review'
import About from './About'
import Header from './Header'
import Portfolio from './Portfolio'
import Services from './Services'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Review />
      <FooterI />
    </div>
  )
}

export default Home