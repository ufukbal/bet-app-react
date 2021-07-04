import React from 'react';
import { useGlobalContext } from '../context';
import '../Styles/Event.scss';

export const Event = ({ event }) => {
  const { events, addEvents, removeEvents } = useGlobalContext();
  const addToCart = (event, rat) => {
    const id = event.nid;

    if (events.some((e) => e.rat === rat && e.event.nid === id)) {
      removeEvents({ event, rat });
    } else {
      addEvents({ event, rat });
    }
    //console.log(rat1, event.NID);
  };

  return (
    <>
      <article className='grid-container'>
        <div className='grid-child'>
          {event.date} {event.day} {event.league}
        </div>
        <div className='grid-child'></div>
        <div className='grid-child item'>{event.name1}</div>
        <div className='grid-child'>{event.nameX}</div>
        <div className='grid-child'>{event.name2 || 2}</div>
        <div className='grid-child'>{event.nameAlt}</div>
        <div className='grid-child'>{event.nameUst}</div>
        <div className='grid-child'>{event.name1X}</div>
        <div className='grid-child'>{event.name12}</div>
        <div className='grid-child'>{event.nameX2}</div>
      </article>

      <article className='grid-container'>
        <div className='grid-child'>
          {event.code} {event.time} {event.name}
        </div>
        <div className='grid-child'>{event.mbs}</div>
        <div
          className={
            events.some(
              (e) => e.rat === event.rat1 && e.event.nid === event.nid
            )
              ? 'active grid-child'
              : 'grid-child'
          }
          onClick={() => addToCart(event, event.rat1)}
        >
          {event.rat1}
        </div>
        <div
          className={
            events.some(
              (e) => e.rat === event.ratX && e.event.nid === event.nid
            )
              ? 'active grid-child'
              : 'grid-child'
          }
          onClick={() => addToCart(event, event.ratX)}
        >
          {event.ratX}
        </div>
        <div className='grid-child'>{event.rat2}</div>
        <div
          className={
            events.some(
              (e) => e.rat === event.ratAlt && e.event.nid === event.nid
            )
              ? 'active grid-child'
              : 'grid-child'
          }
          onClick={() => addToCart(event, event.ratAlt)}
        >
          {event.ratAlt}
        </div>
        <div
          className={
            events.some(
              (e) => e.rat === event.ratUst && e.event.nid === event.nid
            )
              ? 'active grid-child'
              : 'grid-child'
          }
          onClick={() => addToCart(event, event.ratUst)}
        >
          {event.ratUst}
        </div>
        <div
          className={
            events.some(
              (e) => e.rat === event.rat1X && e.event.nid === event.nid
            )
              ? 'active grid-child'
              : 'grid-child'
          }
          onClick={() => addToCart(event, event.rat1X)}
        >
          {event.rat1X}
        </div>
        <div
          className={
            events.some(
              (e) => e.rat === event.rat12 && e.event.nid === event.nid
            )
              ? 'active grid-child'
              : 'grid-child'
          }
          onClick={() => addToCart(event, event.rat12)}
        >
          {event.rat12}
        </div>
        <div
          className={
            events.some(
              (e) => e.rat === event.ratX2 && e.event.nid === event.nid
            )
              ? 'active grid-child'
              : 'grid-child'
          }
          onClick={() => addToCart(event, event.ratX2)}
        >
          {event.ratX2}
        </div>
      </article>
    </>
  );
};

export default Event;
