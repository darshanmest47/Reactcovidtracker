import React from 'react'
import './Footercss/Footer.css'
// import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer">
              <h5><em>Copyright © 2021. All rights reserved.</em></h5>

               <div className="footer__icons">
            <a href="https://www.facebook.com/darshanmesta33" target="_blank"><img alt='facebook'src="https://www.facebook.com/images/fb_icon_325x325.png"/></a>
           <a href="https://twitter.com/" target="_blank"> <img alt='twitter' src ="https://pbs.twimg.com/profile_images/1354479896072884225/AaUbc7ao_400x400.jpg"/></a>
            <a href="https://www.instagram.com/" target="_blank"><img alt='instagram' src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ"/></a>
            </div>
            </div>

           
        </>
    )
}

export default Footer
