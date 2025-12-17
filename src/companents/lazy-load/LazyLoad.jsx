import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const MyImage = ({ alt , height , width , src}) => (
    <div className={`${width} ${height}`}>
        <LazyLoadImage
            alt={alt}
            height={height}
            src={src}
            width={width} 
            effect="blur"
            wrapperClassName={`w-full h-full`}
            className='w-full h-full object-contain'
            />
            
    </div>
);

export default MyImage;