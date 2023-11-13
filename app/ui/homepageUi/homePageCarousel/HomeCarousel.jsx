
import React from "react";
import CarouselDesign from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const HomeCarousel = async({image}) => {
    

    return (
        <div className="  text-white text-[20px] w-full  ">
            <CarouselDesign image={image} />
        </div>
    );
};

export default HomeCarousel;