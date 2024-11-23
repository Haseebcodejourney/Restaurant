import React from 'react'
import '../style/fooditem/style.css'

export default function FoodItem() {
  return (
    <>
 <section className="food-wrapper">
  <div className='food-wrapper-inner'>
        <figure>
          <img
            src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/salmon-dish.jpg"
            alt="Food Image"
            width={900}
            height={450}
          />
        </figure>
    </div>
      </section>
    </>
  )
}
