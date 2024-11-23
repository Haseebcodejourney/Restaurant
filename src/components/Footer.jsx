import React from 'react';
import '../style/footer/style.css'

export default function Footer() {
    return (
        <>
            <section className='footer-wrapper'>
                <div className='footer-wrapper-inner'>
                    <figure>
                        <img src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/logo-white.png' alt='Footer Logo' width={115} height={75} />
                    </figure>
                    <div className='items-list'>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Our Menus</li>
                            <li>Locate</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='under-detail'>
                        <span className='copy-right'>Copyright ThemeGoods All Right Reserved.</span>
                        <div className='btn-wrapper'>
                            <a href='#'>Order Online</a>
                            <a href='#'>Reservation</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
