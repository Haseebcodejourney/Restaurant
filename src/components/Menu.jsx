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
										<h3>Italian Source Mushroom</h3>
										<p>Mushroom / Garlic / Veggies</p>
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
