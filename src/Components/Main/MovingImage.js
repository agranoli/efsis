import React, { useState, useEffect } from 'react';
import ef1 from '../Images/ef1.jpeg';
import ef2 from '../Images/ef2.jpeg';
import ef3 from '../Images/ef3.jpeg';

const MovingImage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % 3); // Assuming you have 3 images
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div id="home" className="h-96 sm:h-full w-screen overflow-hidden relative z-40">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ width: `${100 * 3}%`, transform: `translateX(-${currentImage * 100}vw)` }}>
                <div className="w-screen">
                    <img src={ef1} alt="1" className="h-80 sm:h-128 w-full object-cover" />
                </div>
                <div className="w-screen">
                    <img src={ef2} alt="2" className="h-80 sm:h-128 w-full object-cover" />
                </div>
                <div className="w-screen">
                    <img src={ef3} alt="3" className="h-80 sm:h-128 w-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default MovingImage;
