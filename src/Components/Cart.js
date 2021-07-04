import React from 'react';
import CartItem from './CartItem';
import '../Styles/Cart.scss';
import { useGlobalContext } from '../context';

export const Cart = () => {
  const { events } = useGlobalContext();

  return (
    <div className='cart'>
      {events.map((item) => {
        return <CartItem key={item.event.nid + item.rat} item={item} />;
      })}
      <div className='total'>Toplam Tutar: </div>
      {events.length > 0
        ? events.reduce((acc, curr) => acc * parseFloat(curr.rat), 1).toFixed(2)
        : 0}
    </div>
  );
};

export default Cart;
