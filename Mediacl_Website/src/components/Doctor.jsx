import React from "react";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";

const Doctor = () => {
  const doctors = [
    { id: 1, title: "Elisa Jack, M.D is a highly compassionate physician.", image: doctor1 },
    { id: 2, title: "Dr. Dias had demonstrated an aptitude for providing complete.", image: doctor2 },
    { id: 3, title: "Dr. Vector is a competent, energetic and highly dedicated physician.", image: doctor3 },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="doctor">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Meet our awesome Doctors</h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Our ability to deliver outstanding results for our clients starts with our team of experts.
        </p>
      </div>

      {/* all doctors */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={doctor.image} alt="Doctor" width={350} className="hover:scale-95 transition-all duration-300" />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGrey font-semibold">{doctor.title}</h3>
              <div className="flex items-center justify-center gap-8">
                <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
