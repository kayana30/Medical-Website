import React from "react";
import aboutImg from "../assets/about.png"

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-29/32 mx-auto flex flex-col md:flex-row justify-between items-center gap-36">
          <div>
            <img src={aboutImg} alt="" width={420}/>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">A Medical Clinic that you can rely on</h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-justify">At MxtClinic, our core focus is you. We take pride in being built on the foundation of patient satisfaction and efficiency, ensuring that your time is valued. Our goal is for you to feel well cared for, receiving the best treatment, advice, and service during your visit.</p>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-justify">Your well-being comes first.</p>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-justify">MxtClinic is designed around the patient, meaning you are at the heart of every action and decision we make. As your health partner, we are dedicated to helping you lead a healthy life by offering the best medical and lifestyle care.</p>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-justify">We offer fast, effective, and affordable care for non-life-threatening conditions, with most patients being treated and released in approximately 60 minutes.</p>

            <button className="btn-primary">Learn More</button>

          </div>
        </div>
      </div>
      
      { /* company stats*/}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">Our Mission &<br/><span className="text-brandPrimary">Vision</span></h2>
            <p>A comprehensive physical examination, commonly referred to as a "physical," is an assessment conducted by a physician to evaluate a patient's overall health</p>
          </div>

      {/* stats*/}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/vision.png" alt="" width={50}/>
                <div>
                  <h4 className="text-xl text-neutralDGrey font-semibold">Pandemic Control</h4>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/vision.png" alt="" width={50}/>
                <div>
                  <h4 className="text-xl text-neutralDGrey font-semibold">Cold, Cough, and Flu</h4>
                </div>
              </div>
            </div>
            <div className="space-y-8">
            <div className="flex items-center gap-4">
                <img src="/src/assets/icons/vision.png" alt="" width={50}/>
                <div>
                  <h4 className="text-xl text-neutralDGrey font-semibold">Primary Care</h4>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/vision.png" alt="" width={50}/>
                <div>
                  <h4 className="text-xl text-neutralDGrey font-semibold">High Blood Pressure</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;