import React from 'react'
import './share.css'
import Profile from '../../images/profile.png'
import Live from '@mui/icons-material/LiveTvSharp'
import Media from '@mui/icons-material/PermMediaSharp'
import Feeling from '@mui/icons-material/MoodSharp'
import Location from '@mui/icons-material/LocationOnSharp'
import Tag from '@mui/icons-material/LocalOfferSharp'
import Top1 from '../../images/top1.jpg'
import Top2 from '../../images/top2.jpg'
import Top3 from '../../images/top3.jpg'
import Top4 from '../../images/top4.jpg'
import Top5 from '../../images/top5.jpg'
import Top6 from '../../images/top6.jpg'
const share = () => {
  return (
    <div className='share-main'>
        <div className="top-image">
                    <img src={Top1} alt="" className="top-img" width={'150vw'}/>
                    <img src={Top2} alt="" className="top-img" width={'150vw'}/>
                    <img src={Top3} alt="" className="top-img" width={'150vw'}/>
                    <img src={Top4} alt="" className="top-img" width={'150vw'}/>
                    <img src={Top5} alt="" className="top-img" width={'150vw'}/>
                    <img src={Top6} alt="" className="top-img" width={'150vw'}/>
                </div>
        <div className="share-wrap">
            <div className="top">
                
                <img src={Profile} alt="" className="share-profile" />
                <input placeholder="What's on your mind, Suryansh " type="text" className="share-input" />
            </div>
            <hr className='break'/>
            <div className="bottom">
                <div className="options">
                    <div className="int-options">
                        <Live className='icon' style={{color:"red"}}/>
                        <span className='opt-1'>Live</span>
                    </div>

                    <div className="int-options">
                        <Media className='icon' style={{color:"lightgreen"}}/>
                        <span className='opt-1'>Photo/Video</span>
                    </div>

                    <div className="int-options">
                        <Feeling className='icon' style={{color:"darkgoldenrod"}}/>
                        <span className='opt-1'>Feeling/Activity</span>
                    </div>

                    <div className="int-options">
                        <Location className='icon' style={{color:"green"}}/>
                        <span className='opt-1'>Location</span>
                    </div>

                    <div className="int-options">
                        <Tag className='icon' style={{color:"blue"}}/>
                        <span className='opt-1'>Tag</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default share