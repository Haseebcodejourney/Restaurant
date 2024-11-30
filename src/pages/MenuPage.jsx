import React from 'react'
import Menu from '../components/Menu';
import Main from '../components/Main';

export default function MenuPage() {
  return (
    <>
        <Main/>
        <div className='page-wrapper'>
          <Menu/>
        </div>
    </>
  )
}
