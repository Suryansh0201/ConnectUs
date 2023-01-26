import React from 'react'
import './leftbar.css';
import Watch from '@mui/icons-material/LiveTvSharp';
import Event from '@mui/icons-material/EventAvailableSharp'
import Friends from '@mui/icons-material/PeopleAltSharp'
import Memories from '@mui/icons-material/HistorySharp'
import Arrow from '@mui/icons-material/KeyboardArrowDownSharp'
import Feed from  '@mui/icons-material/RssFeedSharp'
import Chat from '@mui/icons-material/ChatSharp'
import Job from '@mui/icons-material/WorkSharp'
import Courses from '@mui/icons-material/SchoolSharp'
import Theatre from '../../images/Theatre.jpg'
import Weekend from '../../images/weekend.jpg'
import Food from '../../images/food.jpg'
import Balto from '../../images/Balto.jpg'
import Market from '../../images/market.jpg'
import Talks from '../../images/talks.jpg'
import Red from '../../images/red.jpg'
import Video from '../../images/video.jpg'
import Ticket from '../../images/ticket.jpg'
import Nerdville from '../../images/Nerdville.jpg'
import Green from '../../images/green.jpg'
import Number from '../../images/number.jpg'
const leftbar = () => {
  return (
    <div className='main-leftbar'>
      <div className="leftwrap">
        <ul className="left-list">
        <li className="left-list-item">
            <Feed className="left-icon" style={{color:"black"}}/>
            <span className="list-text">Feed</span>
          </li>
          <li className="left-list-item">
            <Chat className="left-icon" style={{color:"purple"}}/>
            <span className="list-text">Chat</span>
          </li>
          <li className="left-list-item">
            <Watch className="left-icon" style={{color:"red"}}/>
            <span className="list-text">Watch</span>
          </li>
          <li className="left-list-item">
            <Event className="left-icon" style={{color:"green"}}/>
            <span className="list-text">Event</span>
          </li>
          <li className="left-list-item">
            <Friends className="left-icon" style={{color:"blue"}}/>
            <span className="list-text">Friends</span>
          </li>
          <li className="left-list-item">
            <Memories className="left-icon" style={{color:"blue"}}/>
            <span className="list-text">Memories</span>
          </li>
          <li className="left-list-item">
            <Job className="left-icon" style={{color:"darkcyan"}}/>
            <span className="list-text">Jobs</span>
          </li>
          <li className="left-list-item">
            <Courses className="left-icon" style={{color:"gold"}}/>
            <span className="list-text">Courses</span>
          </li>
          <li className="left-list-item">
            <Arrow className='left-icon'/>
            <button className='show-more'>Show More</button>
           <hr className='hr-left'/>
          </li>
          <span className="title-short">Shortcuts</span>
        </ul>
        <ul className="left-shortcut-list">
          <li className="shortcuts">
            <img src={Theatre} alt="" className="shortcutimg" />
            <span className="shortcutName">Save the pomeroy Theatre</span>
          </li>

          <li className="shortcuts">
            <img src={Weekend} alt="" className="shortcutimg" />
            <span className="shortcutName">Weekend Trip</span>
          </li>

          <li className="shortcuts">
            <img src={Market} alt="" className="shortcutimg" />
            <span className="shortcutName">Jasper's Market</span>
          </li>

          <li className="shortcuts">
            <img src={Red} alt="" className="shortcutimg" />
            <span className="shortcutName">Red Table Talk Group</span>
          </li>

          <li className="shortcuts">
            <img src={Talks} alt="" className="shortcutimg" />
            <span className="shortcutName">Hidden Hiking Talks</span>
          </li>

          <li className="shortcuts">
            <img src={Food} alt="" className="shortcutimg" />
            <span className="shortcutName">Undiscovered Eats</span>
          </li>

          <li className="shortcuts">
            <img src={Balto} alt="" className="shortcutimg" />
            <span className="shortcutName">Balto Fans</span>
          </li>
          <li className="shortcuts">
            <img src={Video} alt="" className="shortcutimg" />
            <span className="shortcutName">Video Games</span>
          </li>

          <li className="shortcuts">
            <img src={Ticket} alt="" className="shortcutimg" />
            <span className="shortcutName">Dubs Tickets</span>
          </li>

          <li className="shortcuts">
            <img src={Nerdville} alt="" className="shortcutimg" />
            <span className="shortcutName">Nerdville</span>
          </li>

          <li className="shortcuts">
            <img src={Number} alt="" className="shortcutimg" />
            <span className="shortcutName">Numbers</span>
          </li>

          <li className="shortcuts">
            <img src={Green} alt="" className="shortcutimg" />
            <span className="shortcutName">Green Thumbs</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default leftbar