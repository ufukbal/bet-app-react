import React from 'react';
import '../Styles/Cart.scss';

const CartItem = ({ item }) => {
  return (
    <div className='cartItem'>
      MBS: {item.event.mbs} Kod:{item.event.code} Mac: {item.event.name} Oran:{' '}
      {item.rat}
    </div>
  );
};

export default CartItem;
