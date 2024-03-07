//import StayCardInterior from '@/components/stay/StayCardInterior'
import StayCardGallery from '@/components/stay/StayCardGallery';
import StayPageCard from '@/components/stay/StayPageCard'

import { useState } from "react"

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function StayMain({stickyStays, mainStays}) {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <section className='projects interior' id='projects'>
            <div className='theRest'>
            
            {stickyStays.map((stay) => (
                <StayPageCard key={stay.slug} stay={stay} />
            ))}

            
            <div className='projectMap inside-xxl'>
                <div className='galleryTitle text-center flex-md justify-center'><h2>Gallery</h2> <div className='flex-vertical'><span className='smol'>- Click image for larger view</span></div></div>
                
                <div className='projectGrid agSlight'>
                
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                {mainStays.map((stay) => (
                    <StayCardGallery 
                    key={stay.slug} 
                    stay={stay} 
                    />
                ))}
                </LightGallery>

                </div>
            </div>
            </div>
            
            
        </section> 
    )
}

export default StayMain