import React, { useContext } from 'react'
import './FlowerDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FlowerItem from '../FlowerItem/FlowerItem'
const FlowerDisplay = ({category}) => {
    const {flower_list}=useContext(StoreContext)
  return (
    <div>
      <div className='flower-display' id='flower-display'>
        <h2>Najbolje cvijeće samo za Vas!</h2>
        <div className="flower-display-list">
            {flower_list.map((item,index)=>{
              {console.log(category,item.category);}
              if (category==="All" || category===item.category){
                return<FlowerItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

              }
                

            })}
        </div>
      </div>

    </div>
  )
}

export default FlowerDisplay
