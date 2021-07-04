import React from 'react';
import { useEffect } from 'react';
import '../Styles/Header.scss';
import '../Styles/Event.scss';

function Header() {
  useEffect(() => {
    const header = document.getElementById('myHeader');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <div>
      <header>Header Container</header>
      <header id='myHeader' className='header'>
        <article className='grid-container'>
          <div className='grid-child'>Event Count: 3000</div>
          <div className='grid-child'></div>
          <div className='grid-child'>1</div>
          <div className='grid-child'>x</div>
          <div className='grid-child'>2</div>
          <div className='grid-child'>Alt</div>
          <div className='grid-child'>Ust</div>
          <div className='grid-child'>1-X</div>
          <div className='grid-child'>1-2</div>
          <div className='grid-child'>x-2</div>
        </article>
      </header>
    </div>
  );
}

export default Header;
