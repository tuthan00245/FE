import { type } from 'os'
import React from 'react'
import HomeSlider from './HomeSlider/HomeSlider'
import HomeDeal from './HomeDeal/HomeDeal'
import './diss.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <div className="home-page">
      <HomeSlider/>
      <HomeDeal/>
    </div>
    </>
  )
}

export default Home