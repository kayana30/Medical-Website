import React from "react";

const Blog = () => {
  return (
    <div id="blog" className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-2xl text-2xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            A full spectrum multi-specialty medical office covering Cardiology, Neurology, Family Medicine, Internal Medicine, Child and Adult Psychiatry.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="bg-brandPrimary text-white px-6 py-3 rounded-md hover:bg-brandPrimaryDark transition">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
