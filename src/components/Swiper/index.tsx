// Import Swiper React components
import { Flex, Text, Img } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'; 

export function SlideContinent(){

  return(
    <Flex mt={16} mb={5}>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{el: '.swiper-pagination', type: 'bullets', dynamicBullets: true }}
    >
      <SwiperSlide>
        <Flex position="absolute" flexDirection="column" textAlign="center">
          <Text fontFamily="Poppins" fontWeight="bold" fontSize="48" color="#FFF">Europa</Text>
          <Text fontFamily="Poppins" fontWeight="bold" fontSize="24" color="#FFF">O continente mais antigo</Text>
        </Flex>
        <Img src="assets/images/europe.png" alt=""/>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
    </Flex>
  )
}