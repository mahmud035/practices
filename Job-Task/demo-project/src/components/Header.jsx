import React from 'react';
import bg from '../assets/images/bg.jpg';

const Header = () => {
  const bgImage = {
    backgroundImage: `url(${bg})`,
    height: '60vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // backgroundColor: 'rgba(0,0,0,0.65)',
    backgroundColor: 'rgba(19,78,74, 0.7)',
    backgroundBlendMode: 'overlay',
  };

  return (
    <header style={bgImage} className="h-[60vh] ">
      <div className="mx-auto h-full max-w-screen-xl px-4 py-6">
        <div className=" container mx-auto h-full px-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid h-full grid-cols-1 items-center justify-center"
          >
            <div className="grid">
              <h2 className="mb-5 text-center font-sans text-3xl font-bold leading-10 text-white sm:text-4xl  ">
                WE HELP YOUR BUSINESS
              </h2>
              <p className="mb-7 text-center text-base text-white md:mx-auto md:w-4/5 md:text-lg lg:mx-auto lg:w-[70%] xl:mx-auto xl:w-1/2  ">
                Our goal is to bring our customers value. We provide that value
                with a well functioning, aesthetically pleasing website, and
                also through driving more organic traffic, which thus increases
                sales.
              </p>

              <a
                href="/"
                className="inline-block justify-self-center rounded bg-white py-2.5 px-6  font-semibold tracking-wide text-[#41C19E] shadow-md  focus:outline-none "
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
