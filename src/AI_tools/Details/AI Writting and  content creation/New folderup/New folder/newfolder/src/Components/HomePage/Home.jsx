// import React from 'react'

// const Home = () => {
//   return (
//     {/* <ServicesSection />
//       <ProcessSection />
//       <PromiseSection />
//       <Reviews />
//       <LogoSection />
//       <CustomSection />
      
//   )
// }

// export default Home


import React from 'react'
import ServicesSection from './ServicesSection'
import ProcessSection from './ProcessSection'
import PromiseSection from './PromiseSection'
import Reviews from './Reviews'
import LogoSection from './LogoSection'
import TestimonialSlider from './TestimonialSlider'


const Home = () => {
  return (
    <div>
      <ServicesSection/>
      <ProcessSection/>
      <PromiseSection/>
      <TestimonialSlider/>
      <Reviews/>
      <LogoSection/>
     
      
    </div>
  )
}

export default Home
