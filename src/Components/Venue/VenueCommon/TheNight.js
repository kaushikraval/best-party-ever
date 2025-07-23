import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar, A11y } from 'swiper';

export default function TheNight() {
  return (
    <div className="night_wrapper pt-120 pb-80">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4">THE NIGHT</h2>
        </div>
        <div className="night_slider_wrapper">
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={'auto'}
            slideToClickedSlide={true}
            navigation
            FreeMode
            scrollbar={{
              draggable: true,
              type: 'progressbar',
            }}
            centeredSlides={true}
            shortSwipes={true}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="night_slide">
                <div className="night_time">
                  <h5>19:00</h5>
                </div>
                <div className="night_text">Guests Arrive</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="night_slide">
                <div className="night_time">
                  <h5>19:45</h5>
                </div>
                <div className="night_text">Reception ends - bar opens</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="night_slide">
                <div className="night_time">
                  <h5>20:00</h5>
                </div>
                <div className="night_text">Dinner served</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="night_slide">
                <div className="night_time">
                  <h5>21:30</h5>
                </div>
                <div className="night_text">Desserts served</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="night_slide">
                <div className="night_time">
                  <h5>00:00</h5>
                </div>
                <div className="night_text">Last Orders</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="night_slide">
                <div className="night_time">
                  <h5>00:30</h5>
                </div>
                <div className="night_text">Bars Close</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="night_slide">
                <div className="night_time">
                  <h5>01:00</h5>
                </div>
                <div className="night_text">Doors Close & Carriages</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
