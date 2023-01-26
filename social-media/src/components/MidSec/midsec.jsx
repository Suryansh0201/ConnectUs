import React from 'react'
import './midsec.css'
import Share from '../Share/share'
import Post from '../Post/post'
const midsec = () => {
  return (
    <div className='main-midsec'>
      <div className="midsec-wrap">
          <Share/>
          <Post/>
      </div>
    </div>
  )
}

export default midsec