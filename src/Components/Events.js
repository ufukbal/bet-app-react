import React from 'react';
import Event from './Event';
import { useGlobalContext } from '../context';

export const Events = () => {
  const { data } = useGlobalContext();

  return (
    <div>
      {Object.keys(data).map((item) => {
        return <Event key={data[item].nid} event={data[item]}></Event>;
      })}
    </div>
  );
};

export default Events;
