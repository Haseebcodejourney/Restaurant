import React from 'react'
import '../style/items/style.css'

export default function Items() {
  return (
    <>
      <section className="items-wrapper">
        <h2>View Our Menus</h2>
        <div className='items-wrapper-inner'>
          <div className="item-box">
            <figure>
              <img
                src="https://themes.themegoods.com/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/latin-american-food-traditional-chilean-pork-soup-XE2RS5P.jpg"
                alt=""
                width={255}
                height={397}
              />
            </figure>
            <figcaption>Delivery Menu</figcaption>
          </div>

          <div className="item-box">
            <figure>
              <img
                src="https://themes.themegoods.com/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/image-from-rawpixel-id-2269664-jpeg.jpg"
                alt=""
                width={255}
                height={397}
              />
            </figure>
            <figcaption>Dining Menu</figcaption>
          </div>

          <div className="item-box">
            <figure>
              <img
                src="https://themes.themegoods.com/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/drink-with-limes-PLQNG4U.jpg"
                alt=""
                width={255}
                height={397}
              />
            </figure>
            <figcaption>Dining Menu</figcaption>
          </div>

          <div className="item-box">
            <figure>
              <img
                src="https://themes.themegoods.com/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/assorted-eastern-desserts-9UNJWYL.jpg"
                alt=""
                width={255}
                height={397}
              />
            </figure>
            <figcaption>Delivery Menu</figcaption>
          </div>

        </div>
      </section>
    </>
  )
}
