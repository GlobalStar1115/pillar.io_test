import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import SocialButtonComponent from '../../components/SocialButtonComponent';

import './index.css'

const NinjaPage = () => {

  return (
    <div className="page page-ninja">
      <div className="page-wrapper">
        <img src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=d4e0a9e0-5981-11ed-af5a-df2fdc72ed2d" />
        <SocialButtonComponent text="Ninja Gaming" icon="fa-brands fa-youtube" />
        <SocialButtonComponent text="Ninja Vods" icon="fa-brands fa-youtube" />
        <SocialButtonComponent text="Ninja Shorts" icon="fa-brands fa-youtube" />
        <SocialButtonComponent text="GFUEL" icon="fa-solid fa-barcode" />
        <SocialButtonComponent text="Instagram" icon="fa-brands fa-instagram" />
        <SocialButtonComponent text="Twitter" icon="fa-brands fa-twitter" />
        <SocialButtonComponent text="Twitch" icon="fa-brands fa-twitch" />
        <SocialButtonComponent text="Merch!" icon="fa-solid fa-cart-shopping" />
        <SocialButtonComponent text="Text Me!" icon="fa-solid fa-mobile-screen" />
        <SocialButtonComponent text="Masterclass" icon="fa-solid fa-graduation-cap" />
      </div>
    </div>
  );
}

export default NinjaPage
