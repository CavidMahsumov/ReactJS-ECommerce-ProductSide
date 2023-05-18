// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{clickable: true}}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'>
                <SwiperSlide className='mySwiper-slide'>
                    <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide  className='mySwiper-slide'>
                    <img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide  className='mySwiper-slide'>
                    <img src="https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg" alt=''/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}