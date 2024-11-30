import React from 'react'
import '../style/food/style.css'

function Food() {
    return (
        <>
            <section className='animation-food-wrapper'>
                <div className='animation-food-inner'>
                    <div className='upper-box'>
                        <h2>Where food Speaks with Your plates</h2>
                        <figure>
                            <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/image-from-rawpixel-id-2450760-png.png" alt='Food' width={528} height={528} />
                        </figure>
                    </div>
                    <div className='lower-box'>
                        <div className='first-img'>
                            <figure>
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/image-from-rawpixel-id-2822722-png.png" alt='Food' width={420} height={492} />
                            </figure>
                            <figure>
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/image-from-rawpixel-id-2701795-png.png" alt='Food' width={476} height={576} />
                            </figure>
                        </div>
                        <div className='second-img'>
                            <figure>
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/image-from-rawpixel-id-2599960-png.png" alt='Food' width={380} height={380} />
                            </figure>
                        </div>
                        <div className='third-img'>
                            <figure>
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/image-from-rawpixel-id-2701763-png.png" alt='Food' width={180} height={165} />
                            </figure>  
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Food