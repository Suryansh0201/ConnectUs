import React from 'react'
import './post.css'
import Dot from '@mui/icons-material/MoreVertTwoTone'
import Duke from '../../images/Duke.jpg'
import Hellen from '../../images/Hellen.jpg'
import Natasha from '../../images/Natasha.jpg'
import Fredic from '../../images/Fredic.jpg'
import Sam from '../../images/Sam.jpg'
import Comment from '@mui/icons-material/ChatBubbleOutlineOutlined'
import Share from '@mui/icons-material/ShareOutlined'
import Like from '../../images/like.png'
import Heart from '../../images/heart.png'
import Post1 from '../../images/post1.jpg'
import Post2 from '../../images/post2.jpg'
import Post3 from '../../images/post3.jpg'
import Post4 from '../../images/post4.jpg'
import Post5 from '../../images/post5.jpg'
const post = () => {
  return (
    <>

                   {/* Post 1*/}
    <div className='main-post'>
        <div className="post-wrap">
            <div className="post-top">
                <div className="left">
                    <img src={Sam} alt="" className="post-pic" />
                    <span className="name">Sam Tim
            </span>
                    <span className='time'>5min ago</span>
                    
                </div>
                <div className="top-right">
                <Dot/>
                </div>
            </div>
            <div className="post-mid">
              <span className="text">Delicious food :)</span>
              <img src={Post1} alt="" className="photo" />
            </div>
            <div className="post-bottom">
               <div className="b-left">
                <img src={Like} alt="" className="like" />
                <img src={Heart} alt="" className="heart like" />
                <span className='count'>25 likes</span>
                
               </div>

               <div className="b-right">
               <Comment className='comment-icon' />
                <span className="comment">12 Comments</span>
                <Share className='share-icon'/>
                <span className='share'>8 Shares</span>
               </div>
            </div>
        </div>
    </div>
    
                        {/*Post2*/}

    <div className='main-post'>
        <div className="post-wrap">
            <div className="post-top">
                <div className="left">
                    <img src={Duke} alt="" className="post-pic" />
                    <span className="name">Duke Albert
            </span>
                    <span className='time'>20 min</span>
                    
                </div>
                <div className="top-right">
                <Dot/>
                </div>
            </div>
            <div className="post-mid">
              <span className="text">Nature Love</span>
              <img src={Post2} alt="" className="photo" />
            </div>
            <div className="post-bottom">
               <div className="b-left">
                <img src={Like} alt="" className="like" />
                <img src={Heart} alt="" className="heart like" />
                <span className='count'>88 likes</span>
                
               </div>

               <div className="b-right">
               <Comment className='comment-icon' />
                <span className="comment">16 comments</span>
                <Share className='share-icon'/>
                <span className='share'>3 shares</span>
               </div>
            </div>
        </div>
    </div>

                              {/*Post3*/}

    <div className='main-post'>
        <div className="post-wrap">
            <div className="post-top">
                <div className="left">
                    <img src={Hellen} alt="" className="post-pic" />
                    <span className="name">Hellen Tery</span>
                    <span className='time'>1 hr ago</span>
                    
                </div>
                <div className="top-right">
                <Dot/>
                </div>
            </div>
            <div className="post-mid">
              <span className="text"></span>
              <img src={Post3} alt="" className="photo" />
            </div>
            <div className="post-bottom">
               <div className="b-left">
                <img src={Like} alt="" className="like" />
                <img src={Heart} alt="" className="heart like" />
                <span className='count'>16 likes</span>
                
               </div>

               <div className="b-right">
               <Comment className='comment-icon' />
                <span className="comment">3 comments</span>
                <Share className='share-icon'/>
                <span className='share'>1 share</span>
               </div>
            </div>
        </div>
    </div>

                           {/*Post4*/}

    <div className='main-post'>
        <div className="post-wrap">
            <div className="post-top">
                <div className="left">
                    <img src={Natasha} alt="" className="post-pic" />
                    <span className="name">Natasha Lopez</span>
                    <span className='time'>2 hrs ago</span>
                    
                </div>
                <div className="top-right">
                <Dot/>
                </div>
            </div>
            <div className="post-mid">
              <span className="text">My first post</span>
              <img src={Post4} alt="" className="photo" />
            </div>
            <div className="post-bottom">
               <div className="b-left">
                <img src={Like} alt="" className="like" />
                <img src={Heart} alt="" className="heart like" />
                <span className='count'>41 likes</span>
                
               </div>

               <div className="b-right">
               <Comment className='comment-icon' />
                <span className="comment">12 comments</span>
                <Share className='share-icon'/>
                <span className='share'>6 shares</span>
               </div>
            </div>
        </div>
    </div>
                                  {/*Post5*/}

    <div className='main-post'>
        <div className="post-wrap">
            <div className="post-top">
                <div className="left">
                    <img src={Fredic} alt="" className="post-pic" />
                    <span className="name">Fredic Lever</span>
                    <span className='time'>3 days ago</span>
                    
                </div>
                <div className="top-right">
                <Dot/>
                </div>
            </div>
            <div className="post-mid">
              <span className="text"></span>
              <img src={Post5} alt="" className="photo" />
            </div>
            <div className="post-bottom">
               <div className="b-left">
                <img src={Like} alt="" className="like" />
                <img src={Heart} alt="" className="heart like" />
                <span className='count'>23 likes</span>
                
               </div>

               <div className="b-right">
               <Comment className='comment-icon' />
                <span className="comment">6 comments</span>
                <Share className='share-icon'/>
                <span className='share'>3 shares</span>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default post