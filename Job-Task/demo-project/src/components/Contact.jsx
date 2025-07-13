import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[#41C19E] ">
        <div className="max-w-screen-xl mx-auto py-6">
          <div className="px-6 py-10 mx-auto container">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2 lg:gap-8 text-white">
              <input
                id="email"
                type="email"
                className="w-4/5 mx-auto sm:w-3/5 lg:w-[450px] lg:mx-0 px-4 py-2 bg-[#3aad8e] text-white placeholder-white border-2 rounded-md focus:border-2 outline-white "
                placeholder="Email Address"
              />

              <button className="w-4/5 mx-auto sm:w-2/5 lg:w-fit lg:mx-0 px-4 py-2 lg:px-6 font-medium tracking-wide capitalize bg-white text-[#41C19E] rounded-md sm:mx-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
