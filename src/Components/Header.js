import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../context';

import '../Styles/Header.scss';
import '../Styles/Event.scss';

function Header() {
  const { data } = useGlobalContext();

  const title = data[0];
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
          <div className='grid-child title'>Event Count: {data.length}</div>
          <div className='grid-child'></div>
          <div className='grid-child'>{title.name1}</div>
          <div className='grid-child'>{title.nameX}</div>
          <div className='grid-child'>{title.name2 || 2}</div>
          <div className='grid-child'>{title.nameAlt}</div>
          <div className='grid-child'>{title.nameUst}</div>
          <div className='grid-child'>{title.name1X}</div>
          <div className='grid-child'>{title.name12}</div>
          <div className='grid-child'>{title.nameX2}</div>
        </article>
      </header>
    </div>
  );
}

export default Header;
