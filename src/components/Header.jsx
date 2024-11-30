import React, {useState, useEffect} from 'react';
import '../style/header/style.css'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Change 50 to your desired scroll threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      // Add scroll event listener when component mounts
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
        <header className={`header-wrapper ${scrolled  ? "scrolled" : ""}`}>
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
                    <li>+90 548 844 2019</li>
                    <li>Order Online</li>
                    <li>Reservation</li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header;