import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" style={{ width: '65px', height: 'auto' }}/>
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/lists' className="sidebar-option">
                <img src={assets.list} alt="" style={{ width: '65px', height: 'auto' }} />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.list} alt="" style={{ width: '65px', height: 'auto' }}/>
                <p>Orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
