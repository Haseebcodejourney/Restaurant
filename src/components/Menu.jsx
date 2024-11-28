import React from 'react';
import '../style/menu/menu.css'

export default function Menu() {
	return (
		<>
			<section className='menu-wrapper'>
				<h2>Signature</h2>
				<div className='menu-inner-wrapper'>
					<div className='menu-details'>
						<div className='items-list'>
							<div className='items-lists-inner'>
								<figure>
									<img src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2014/07/image-from-rawpixel-id-2822731-png-150x150.png' alt='Food' width={80} height={80} />
								</figure>
								
								<div className='detail-food-item'>
									<div>
										<h3>PARATHA & ROTI</h3>
										<p>SADA PRATHA / ALOO PARATHA / BALON WALA PARATHA / CHEES PARATHA / SADA ROTI</p>
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>

								<div className='detail-food-item'>
									<div>
										<h3>KABAB</h3>
										{/* <p>SADA PRATHA / ALOO PARATHA / BALON WALA PARATHA / CHEES PARATHA / SADA ROTI</p> */}
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>


								<div className='detail-food-item'>
									<div>
										<h3>TRADITIONAL HALWA PURI</h3>
										{/* <p>SADA PRATHA / ALOO PARATHA / BALON WALA PARATHA / CHEES PARATHA / SADA ROTI</p> */}
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>

								<div className='detail-food-item'>
									<div>
										<h3>SAMOSA</h3>
										<p>FRENCH FRIES</p>
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>

								<div className='detail-food-item'>
									<div>
										<h3>TAVUK BURGER</h3>
										{/* <p>SADA PRATHA / ALOO PARATHA / BALON WALA PARATHA / CHEES PARATHA / SADA ROTI</p> */}
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>

								<div className='detail-food-item'>
									<div>
										<h3>CHICKEN BIRYANI</h3>
										{/* <p>SADA PRATHA / ALOO PARATHA / BALON WALA PARATHA / CHEES PARATHA / SADA ROTI</p> */}
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>

								<div className='detail-food-item'>
									<div>
										<h3>CURRY</h3>
										<p>CHICKEN CURRY / MUTTON CURRY / BEEF CURRY / KOFTA CURRY / VEGETABLE CURRY</p>
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>


								<div className='detail-food-item'>
									<div>
										<h3>PAYA CORBA</h3>
										<p>CHICKEN CURRY / MUTTON CURRY / BEEF CURRY / KOFTA CURRY / VEGETABLE CURRY</p>
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>


								<div className='detail-food-item'>
									<div>
										<h3>TAVUK DONER SERVICE</h3>
										<p>TAVUK DONER</p>
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>

								
								<div className='detail-food-item'>
									<div>
										<h3>FRIED CHICKEN</h3>
										<p>CRISPY FRIED CHICKEN / CHICKEN PAKORA / CHICKEN WINGS</p>
									</div>
									<div className='price-detail-menu'>
										<span>$19.9</span>
									</div>
								</div>

							</div>
						</div>
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
