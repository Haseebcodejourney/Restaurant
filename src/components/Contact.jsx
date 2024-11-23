import React from 'react'
import '../style/contact/style.css'

export default function Contact() {
    return (
        <>
            <section className='contact-wrapper'>
                <h2>Contact</h2>
                <div className='contact-inner-wrapper'>
                    <div className='contact-details'>
                        <form className='form-wrapper'>
                            <form className='from-wrapper'>
                                <div className='form-input'>
                                    <label htmlFor="username">Your name</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                    />
                                </div>
                                <div className='form-input'>
                                    <label htmlFor="email">Your email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div className='form-input'>
                                    <label>Your message (optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                    />
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </form>
                    </div>
                    <div className='menu-reservation'>
                        <h3>Reservation</h3>
                        <p>Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. </p>
                        <p>Et leggings fanny pack, elit bespoke vinyl art.</p>
                        <a href='#'>Reservation</a>
                    </div>
                </div>
            </section>
        </>
    )
}