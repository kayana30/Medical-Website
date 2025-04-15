import React from "react";
import aboutImg from "../assets/doctors.png";
import Img from "../assets/blood_donation.png"

const Products = () => {
  return (
    <div>
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={aboutImg} alt="" width={350}/>
        </div>
        <div className="md:w-3/5 mx-auto">
  <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">Why MxtClinic?</h2>
  <p className="md:w-14/15 text-m text-neutralGrey font-semibold mb-8">Affordable - Our prices are often lower than they are at the emergency room, and we accept most.</p>
  <p className="md:w-14/15 text-m text-neutralGrey font-semibold mb-8">Online Registration - Our wait times are short, and you can save even more time by registering for your visit online.</p>
  <p className="md:w-14/15 text-m text-neutralGrey font-semibold mb-8">Multiple Locations - We have several locations in New York and one in Miami Beach.</p>
  <p className="md:w-14/15 text-m text-neutralGrey font-semibold mb-8">Extended Hours - We’re open mornings, evenings, and weekends so that you can see a provider when you need one.</p>
  <button className="btn-primary">Learn More</button>
</div>

      </div>
    </div>
    
    { /* company stats*/}
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/3">
          <img src={Img} alt="" width={350}/>
        </div>

    {/* stats*/}
        <div className="md:w-2/3 mx-auto">
          <div>
            <p className="md:w-4/5 text-2xl text-neutralDGrey font-bold">Blood Donation Campaign</p>
            <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">We are delighted to announce that MxtClinic is celebrating its tenth anniversary. Since opening our doors, our commitment..</p>
          </div>
          <h5 className="text-brandPrimary text-xl font-semibold mb-2">Make an Appointment</h5>
          <p className="text-base text-neutralGrey mb-8">Primary care appointments and some specialties</p>
          <div>
            <div className="flex items-center gap-8 flex-wrap">
              <img src="/src/assets/company1.png" alt="" width={50} className="cursor-pointer"/>
              <img src="/src/assets/company2.png" alt="" width={50} className="cursor-pointer"/>
              <img src="/src/assets/company3.png" alt="" width={50} className="cursor-pointer"/>
              <img src="/src/assets/company4.png" alt="" width={50} className="cursor-pointer"/>
              <img src="/src/assets/company5.png" alt="" width={50} className="cursor-pointer"/>
              <img src="/src/assets/company6.png" alt="" width={50} className="cursor-pointer"/>
                <div className="flex items-center gap-8">
                  <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Meet all</a>

                </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  </div>
  );
};

export default Products;