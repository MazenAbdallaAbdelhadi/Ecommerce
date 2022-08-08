import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ItemBox } from './ItemBox';

export const SwiperContainer = ({itemsArray}) => {
  return (
    <div>
        <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={20}
            navigation
            slidesPerView={4}
        >
            {itemsArray.map((item)=>{return <SwiperSlide key={item.id}><ItemBox product={item}/></SwiperSlide>})}
        </Swiper>
    </div>
  )
}
