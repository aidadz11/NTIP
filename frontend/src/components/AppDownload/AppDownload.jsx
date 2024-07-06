import React from 'react'
import './AppDownload.css'

import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download<br/>FlowerShop App</p>
        <div className="app-download-platforms">

            <img src={playstore} alt="" style={{ width: '80px', height: 'auto' }}/>
            <img src={appstore} alt="" style={{ width: '80px', height: 'auto' }}/>
        </div>
      
    </div>
  )
}

export default AppDownload
