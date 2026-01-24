import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";

function ProductCarousel ( { products } )
{
    return (
        <Swiper
            modules={ [ Navigation ] }
            navigation
            spaceBetween={ 20 }
            slidesPerView={ 5 }
            breakpoints={ {
                320: { slidesPerView: 1.2 },
                640: { slidesPerView: 2.2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
            } }
            style={ { paddingBottom: "30px" } }
        >
            { products.map( ( product ) => (
                <SwiperSlide key={ product.id }>
                    <ProductCard product={ product } />
                </SwiperSlide>
            ) ) }
        </Swiper>
    );
}

export default ProductCarousel;
