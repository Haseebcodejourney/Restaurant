import React from 'react'
import '../style/hero/style.css'

export default function Hero() {
  return (
    <>
      <section className="hero-wrapper">
        <div className="hero-inner">
          <h2>Our Mission</h2>
          <div className="hero-text-detail">
            <p>
              Our mission is to offer an unforgettable dining experience that celebrates the rich flavors and diverse culinary traditions of Cyprus. We are dedicated to sourcing the finest local ingredients and blending them with time-honored recipes to create dishes that highlight the island's unique tastes and culture. Each meal is crafted with care and passion, ensuring every guest enjoys a taste of authentic Cypriot hospitality.
            </p>
            <p>
              At our restaurant, we strive to create a warm, welcoming atmosphere where every customer feels like part of our family. Whether you're enjoying a casual meal with friends or celebrating a special occasion, our goal is to provide exceptional service, unforgettable food, and a sense of connection to the heart of Cyprus.
              <div className="hero-view-more">
                <span>View More menus</span>
              </div>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
