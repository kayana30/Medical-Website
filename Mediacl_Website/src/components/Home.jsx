import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from '../assets/banner1.png'

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
      <Carousel className="w-full mx-auto">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         <div>
          <img src={banner1} alt="" width={650}/>
         </div>
         <div className="md:w-1/2">
          <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">We Help to 
          <span className="text-brandPrimary leading-snug">Protect Yourself</span></h1>
          <p className="text-neutralDGrey text-base mb-8">A comprehensive multi-specialty medical practice offering expert care in Cardiology, Neurology, and Psychiatry for both children and adults</p>
          <button className="btn-primary">Register</button>
         </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         <div>
          <img src={banner1} alt="" width={650}/>
         </div>
         <div className="md:w-1/2">
          <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">We’re here to help you<span className="text-brandPrimary leading-snug">safeguard your health</span></h1>
          <p className="text-neutralDGrey text-base mb-8">Our multi-specialty medical center provides expert care in Cardiology, Neurology, and Psychiatry for both children and adults</p>
          <button className="btn-primary">Register</button>
         </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         <div>
          <img src={banner1} alt="" width={650}/>
         </div>
         <div className="md:w-1/2">
          <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">We Help to<span className="text-brandPrimary leading-snug">Protect Yourself</span></h1>
          <p className="text-neutralDGrey text-base mb-8">A comprehensive multi-specialty medical practice offering expert care in Cardiology, Neurology, and Psychiatry for both children and adults</p>
          <button className="btn-primary">Register</button>
         </div>
        </div>

      
      </Carousel>

      </div>
    </div>
  );
};

export default Home;