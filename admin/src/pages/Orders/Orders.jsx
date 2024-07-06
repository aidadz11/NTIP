import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Orders.css';
import { useContext } from 'react';
import { StoreContext } from '../../../../frontend/src/context/StoreContext';

const Orders = ({ url }) => {
  
  const [orders, setOrders] = useState([]);

  // Funkcija za dohvaćanje svih narudžbi
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error('Greška prilikom dohvaćanja narudžbi');
      }
    } catch (error) {
      console.error('Greška prilikom dohvaćanja narudžbi:', error);
      toast.error('Neuspješno dohvaćanje narudžbi');
    }
  };

  // Funkcija za promjenu statusa
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + '/api/order/status', {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders(); // Ponovno dohvati narudžbe nakon promjene statusa
      }
    } catch (error) {
      console.error('Greška prilikom ažuriranja statusa narudžbe:', error);
      toast.error('Neuspješno ažuriranje statusa narudžbe');
    }
  };

  // Dohvati narudžbe pri montiranju komponente
  useEffect(() => {
    fetchAllOrders();
  }, [url]); // Uključite url u niz ovisnosti kako bi se ponovo dohvatili podaci ako se url promijeni

  return (
    <div className='order add'>
      <h3>Stranica narudžbi</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.box} alt='' style={{ width: '30px', height: 'auto' }} />
            <div>
              <p className='order-item-flower'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + ' x ' + item.quantity;
                  } else {
                    return item.name + ' x ' + item.quantity + ', ';
                  }
                })}
              </p>
              <p className='order-item-name'>
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className='order-item-adress'>
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Broj stavki: {order.items.length}</p>
            <p>Iznos: {order.amount} KM</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value='Flower Processing'>Obrada cvijeća</option>
              <option value='Out for delivery'>Isporuka u tijeku</option>
              <option value='Delivered'>Isporučeno</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
