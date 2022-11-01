import React, { useState, useEffect, useRef } from 'react'
import { useStore, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

const SocialButtonComponent = ({ text, icon }) => {

  
  return (
    <div className="btn btn-social">
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </div>
  );
}

export default SocialButtonComponent
