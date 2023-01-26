import React from 'react'
import Search from '@mui/icons-material/SearchSharp';
import {Chat, Person} from '@mui/icons-material'
import Notification from '@mui/icons-material/NotificationsSharp';
import Profile from '../../images/profile.png'
import './navbar.css'
const navbar = () => {
  return (
    <div className='nav-main'>
        <div className="nav-left">
<span className='logo'>ConnectUs</span>
        </div>
        <div className="nav-mid">
          <div className="search">
            <Search className='searchIcon'/>
            <input placeholder='Search Something' className='input'/>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-right-link">
            <span className='right-link'>Home Page</span>
            <span className='right-link'>Timeline</span>
          </div>
          <div className="nav-right-icon">
              <div className="items">
                <Person className='right-icon'/>
                <span className='int-item'>1</span>
              </div>
              <div className="items">
                <Chat className='right-icon'/>
                <span className='int-item'>2</span>
              </div>
              <div className="items">
                <Notification className='right-icon'/>
                <span className='int-item'>8</span>
              </div>
          </div>
          <img className='profilePic' src={Profile} alt="" />
        </div>
    </div>
  )
}

export default navbar
