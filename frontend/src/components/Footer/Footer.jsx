import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.jpg';
import facebook from '../../assets/face.png';
import mail from '../../assets/mail.png';
import insta from '../../assets/insta.png';
import fb from '../../assets/fb.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="" style={{ width: '80px', height: 'auto' }}/>
                <p>FlowerShop je vaša lokalna cvjećarska radnja specijalizirana za svježe, ručno odabrane cvjetne aranžmane za svaku prigodu. Naša strast prema cvijeću i posvećenost kvaliteti čini nas vašim pouzdanim izborom za sve cvjetne potrebe.</p>
                <div className="footer-social-items">
                <img src={mail} alt="" style={{ width: '50px', height: 'auto' }}/>
                <img src={insta} alt="" style={{ width: '45px', height: 'auto' }} />
                <img src={fb} alt=""style={{ width: '45px', height: 'auto' }}/>
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH </h2>
                <ul>
                    <li>+1-222-333-4444</li>
                    <li>flowershop@gmail.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright &copy; 2024 FlowerShop - All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer
