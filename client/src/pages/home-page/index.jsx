import React from 'react'
import CaruselPart from '../carusel-part'
import MissionPart from '../mission-part'
import Plants from '../plant-part'
import PricingPart from '../pricing-part'
import TeamPart from '../team-part'
import {Helmet} from "react-helmet";

const Homepage = () => {
  return (
    <div>
                <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
        <CaruselPart/>
        <MissionPart/>
        <Plants/>
        <PricingPart/>
        <TeamPart/>
    </div>
  )
}

export default Homepage