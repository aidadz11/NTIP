import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket.webp';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin }) => { // Promijenjeno da destrukturira setShowLogin iz props objekta
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const [dateTime, setDateTime] = useState(new Date());

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='navbar'>
            <Link to='/'><img src={logo} alt="Logo" style={{ width: '65px', height: 'auto' }} /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("gallery")} className={menu === "gallery" ? "active" : ""}>Gallery</a>
                <a href='#app-download' onClick={() => setMenu("aboutus")} className={menu === "downloadapp" ? "active" : ""}>Download App</a>
                <a href='#footer' onClick={() => setMenu("contactus")} className={menu === "contactus" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <div className="navbar-datetime">
                    <p>{dateTime.toLocaleDateString()}</p>
                    <p>{dateTime.toLocaleTimeString()}</p>
                </div>
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={basket} alt="Basket" style={{ width: '30px', height: 'auto' }} /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button>
                    : <div className='navbar-profile'>
                        <img src={assets.profile} alt="" style={{ width: '30px', height: 'auto' }} />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate('/myorders')}><img src={assets.bag} alt="" style={{ width: '30px', height: 'auto' }} /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout} alt="" style={{ width: '30px', height: 'auto' }} /><p>Logout</p></li>
                        </ul>
                    </div>}
            </div>
        </div>
    );
}

export default Navbar;
