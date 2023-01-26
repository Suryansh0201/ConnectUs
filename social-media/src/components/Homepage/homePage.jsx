import React from 'react'
import Navbar from '../Navbar/navbar'
import LeftBar from '../LeftBar/leftbar'
import MidSec from '../MidSec/midsec'
import RightBar from '../RightBar/rightbar'
import './homePage.css'
const homePage = () => {
  return (
    <>
    <Navbar/>
    <div className="int-home">
    <LeftBar/>
    <MidSec/>
    <RightBar/>
    </div>
    </>
  )
}

export default homePage