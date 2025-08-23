import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#ECF8F5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-6 py-20  container mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center  ">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
              className="lg:pr-10 text-center lg:text-left"
            >
              <h5 className="mb-4 text-3xl md:text-4xl font-semibold leading-none">
                ABOUT US
              </h5>
              <p className="mb-6 ">
                There's this notion that to grow a business, you have to be
                ruthless. But we know there's a better way to grow. One where
                what's good for the bottom line is also good for customers. We
                believe businesses can grow with a conscience, and succeed with
                a soul - and that they can do it with inbound.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <img
                className="object-cover w-full h-64 rounded shadow-lg sm:h-80"
                src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
