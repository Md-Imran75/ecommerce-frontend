import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductPageCarousel = ({data}) => {
    const images = data?.[0]?.attributes?.image?.data
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img) => (
                    <img
                        key={img.id}
                        src={img.attributes.url}
                        alt={img.attributes.name}
                        loading="lazy"
                    />
                ))}
             
            </Carousel>
        </div>
    );
};

export default ProductPageCarousel;