import React from 'react';
import profile from '../assets/images/profile.jpg';
import twitter from '../assets/images/twitter.png';
import linkedIn from '../assets/images/linkedIn.png';
import github from '../assets/images/github.png';

const Profile = () => {
  // #0072b1
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="container mx-auto px-5 py-8">
        <div className="grid grid-cols-1 gap-6 rounded-3xl bg-gray-100 p-8 shadow-lg sm:grid-cols-2 sm:gap-0 sm:p-10">
          {/* Image & Icon */}
          <div>
            <div className="mx-auto h-44 w-44 rounded-full outline outline-4 outline-offset-2 outline-blue sm:mx-0 sm:mt-2 sm:ml-2 sm:h-40 sm:w-40 md:ml-6 md:mt-6">
              <img
                className="mx-auto h-44 w-44 rounded-full object-cover object-center grayscale sm:mx-0 sm:h-40 sm:w-40 "
                src={profile}
                alt=""
              />
            </div>
            <div className="mx-auto grid w-40 grid-cols-3 pt-8 sm:mx-0 sm:pt-9 md:ml-6">
              <img
                className="mx-auto h-9 w-9 object-cover object-center"
                src={twitter}
                alt=""
              />
              <img
                className="mx-auto h-9 w-9 object-cover object-center"
                src={linkedIn}
                alt=""
              />
              <img
                className="mx-auto h-9 w-9 object-cover object-center"
                src={github}
                alt=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:-ml-10 sm:mt-2 sm:pt-8 md:-ml-20 md:mt-6 lg:-ml-52">
            {/* Name & Bio */}
            <div className="pb-6 text-center sm:text-left">
              <h1 className="text-[27px] font-extrabold text-blue">
                Krushna Ratnaprakhi
              </h1>
              <h3 className="pt-1 pb-3 text-lg font-medium text-slate-600">
                Venture Partner
              </h3>
              <p className="text-gray-500">Pune, Maharashtra, India</p>
            </div>

            <div className=" h-0.5 bg-gray-300" />

            {/* Bio  */}
            <div className="grid grid-cols-1 py-7  text-center sm:grid-cols-2 sm:text-left">
              <h3 className="text-lg font-medium text-slate-600 ">Bio</h3>
              <p className="pt-2 text-gray-500 sm:-ml-20 sm:pt-0 md:-ml-32 lg:-ml-64">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, ea? Aliquam deserunt sint molestias, quidem veniam
                laborum, iusto libero nisi corrupti reprehenderit quos, facere
                dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
