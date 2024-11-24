import React from 'react';
import '../style/header/style.css'

export default function Header() {
  return (
    <>
        <header className='header-wrapper'>
            <div className='left-header-wrapper'>
                <span></span>
                <span>
                    <figure>
                        <img src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/logo-white.png' alt='Logo' width={90} height={59} />
                    </figure>
                </span>
            </div>
            <div className='right-header-wrapper'>
                <ul>
                    <li>685-456-6743</li>
                    <li>Order Online</li>
                    <li>Reservation</li>
                </ul>
            </div>
        </header>
    </>
  )
}
