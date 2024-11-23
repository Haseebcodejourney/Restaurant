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
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Seitan High Life
              reprehenderit consectetur cupidatat kogi. Et leggings fanny pack,
              elit bespoke vinyl art party Pitchfork selfies master cleanse
            </p>
            <p>
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep v laborum.
              Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
              readymade swag.
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
