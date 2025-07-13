import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import user1 from '../assets/images/user-1.jpg';
import user2 from '../assets/images/user-2.jpg';
import user3 from '../assets/images/user-3.jpg';

const Testimonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="px-6 pb-16 mx-auto container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=" grid grid-cols-1 sm:grid-cols-2 gap-6 pt-20"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center ">
              <img
                className="w-32 h-32 rounded-full object-cover object-center mx-auto"
                src={user2}
                alt=""
              />
              <div className="pt-5 text-center md:text-left">
                <h3 className="text-2xl font-semibold pb-3">Steve Smith</h3>
                <p className="w-4/5 mx-auto md:w-3/4 md:mx-0">
                  The Landscaping Professionals were quick, courteous and very
                  helpful. They helped me restore my lawn and gardens completely
                  after putting in my deck.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center pb-24">
              <img
                className="w-32 h-32 rounded-full object-cover object-center mx-auto"
                src={user1}
                alt=""
              />
              <div className="pt-5 text-center md:text-left">
                <h3 className="text-2xl font-semibold pb-3">Alex Carey</h3>
                <p className="w-4/5 mx-auto md:w-3/4 md:mx-0">
                  It takes my broom and other items and stores them with ease.
                  Love the organization it provides and ease of use. Highly
                  recommend.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center pb-24">
              <img
                className="w-32 h-32 rounded-full object-cover object-center mx-auto"
                src={user3}
                alt=""
              />
              <div className="pt-5 text-center md:text-left">
                <h3 className="text-2xl font-semibold pb-3">John Doe</h3>
                <p className="w-4/5 mx-auto md:w-3/4 md:mx-0">
                  The Landscaping Professionals were quick, courteous and very
                  helpful. They helped me restore my lawn and gardens completely
                  after putting in my deck.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
