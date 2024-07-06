import React, { useContext } from 'react'
import './FlowerItem.css'
import zvijezda from '../../assets//zvjezdice.png'
import add_icon_white from '../../assets/add_icon_white.jpg';
import remove_add_icon from '../../assets/remove_add_icon.png';
import green_add_icon from '../../assets/green_add_icon.png';
import { StoreContext } from '../../context/StoreContext';
const FlowerItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='flower-item'>
        <div className="flower-item-img-container">
            <img className='flower-item-image' src={url+"/images/"+image} alt="" style={{ width: '200px', height: 'auto' }}/>
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)}src={add_icon_white} alt="" style={{ width: '30px', height: 'auto' }}/>
              :<div className='flower-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={remove_add_icon} alt="" style={{ width: '30px', height: 'auto' }}/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={green_add_icon} alt="" style={{ width: '30px', height: 'auto' }}/>
                </div>

            }
            
        </div>
        <div className="flower-item-info">
            <div className="flower-item-name-rating">
                <p>{name}</p>
                <img src={zvijezda} alt="Zvijezda" style={{ width: '65px', height: 'auto' }} />
                
            </div>
            <p className="flower-item-description">{description} </p>
            <p className="flower-item-price">{price} KM</p>
        </div>
      
    </div>
  )
}

export default FlowerItem
