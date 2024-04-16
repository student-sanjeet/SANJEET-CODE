import React from 'react'
import { Desktop, Mobile } from '../Responsive'
import { HEADER_LOGO } from './Constant'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <Desktop>
        <div className='desktop-header text-white w-full' >
            <div className='header-container w-full mx-auto py-2 flex justify-between' >
                <img width={113} height={36} src={HEADER_LOGO} alt="logo" />
                <div className='flex gap-2' >
                    <div className='login-btn py-2 px-9 rounded' >
                      <Link to="./login" >Login</Link>
                    
                    </div>
                    <div className='language-btn py-2 px-9 rounded' >
                      Language
                    </div>
                </div>
            </div>
        </div>
     </Desktop>

     <Mobile>
        Mobile Header
     </Mobile>
    </>
  )
}

export default Header