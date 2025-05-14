import React from 'react'
import ITIntro from './ITIntro'
import CardSection from './cardsData'
import ITTeamSection from './TeamData'
import PromiseSection from '../HomePage/PromiseSection'
import OurPromises from './Promises'

const WhoWeAre = () => {
  return (
    <div>
      <ITIntro/>
      <CardSection/>
      <ITTeamSection/>
      <OurPromises/>
    </div>
  )
}

export default WhoWeAre
