import React from 'react'
import './rightbar.css'
import Birthday from '../../images/birthday.jpg'
import Ad from '../../images/ad.jpg'
import HrDot from '@mui/icons-material/MoreHoriz'
import { Search } from '@mui/icons-material'
import Duke from '../../images/Duke.jpg'
import Hellen from '../../images/Hellen.jpg'
import Natasha from '../../images/Natasha.jpg'
import Fredic from '../../images/Fredic.jpg'
import Enna from '../../images/Enna.jpg'
import John from '../../images/John.jpg'
import Sam from '../../images/Sam.jpg'
const rightbar = () => {
  return (
    <div className='main-rightbar'>
      <div className="right-wrap">
        <div className="birthday">
          <img src={Birthday} alt="" className="birth-photo" />
          <span className="birth-text"><b>Hellen, Fredic</b> and <b>4 others friends </b>have <br/> &nbsp;birthday today</span>
        </div>
        <img src={Ad} alt="" className='ad'/>
        <div className="contact-right"></div>
        <span className="contact">Contacts</span>
        <HrDot className='icon'/>
        <Search className='icon'/>
        <ul className="left-friend-list">
          <li className="friends">
            <img src={Sam} alt="" className="frienfImg" />
            <span className="friendName">Sam Tim</span>
          </li>

          <li className="friends">
            <img src={Duke} alt="" className="frienfImg" />
            <span className="friendName">Duke Albert</span>
          </li>

          <li className="friends">
            <img src={Hellen} alt="" className="frienfImg" />
            <span className="friendName">Hellen tery</span>
          </li>

          <li className="friends">
            <img src={Natasha} alt="" className="frienfImg" />
            <span className="friendName">Natasha lopez</span>
          </li>

          <li className="friends">
            <img src={Fredic} alt="" className="frienfImg" />
            <span className="friendName">Fredic Lever</span>
          </li>

          <li className="friends">
            <img src={Enna} alt="" className="frienfImg" />
            <span className="friendName">Enna Luise</span>
          </li>

          <li className="friends">
            <img src={John} alt="" className="frienfImg" />
            <span className="friendName">John paul</span>
          </li>
          <li className="friends">
            <img src={Natasha} alt="" className="frienfImg" />
            <span className="friendName">Emmy Dar</span>
          </li>

          <li className="friends">
            <img src={Duke} alt="" className="frienfImg" />
            <span className="friendName">Sam Joseph</span>
          </li>

          <li className="friends">
            <img src={Enna} alt="" className="frienfImg" />
            <span className="friendName">Aditi Rai</span>
          </li>

          <li className="friends">
            <img src={John} alt="" className="frienfImg" />
            <span className="friendName">Nitin Kumar</span>
  </li>
        </ul>
      </div>
    </div>
  )
}

export default rightbar