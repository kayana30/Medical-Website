import React from "react";

const Services = () => {
  const services = [
    {id: 1, title: "15+", description: "Expert Doctors", image: "/src/assets/icons/image1.png"},
    {id: 2, title: "15k", description: "Satisfy Customers", image: "/src/assets/icons/image2.png"},
    {id: 3, title: "10+", description: "Years of Expriences", image: "/src/assets/icons/image3.png"},
  ]
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralGrey font-semibold mb-2">Our Medical Services</h2>
        <p className="text-neutralGrey">Best clinic with over 10 years of experience</p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/company1.png" alt="" width={80}/>
          <img src="/src/assets/company2.png" alt="" width={80}/>
          <img src="/src/assets/company3.png" alt="" width={80}/>
          <img src="/src/assets/company4.png" alt="" width={80}/>
          <img src="/src/assets/company5.png" alt="" width={80}/>
          <img src="/src/assets/company6.png" alt="" width={80}/>
          <img src="/src/assets/company7.png" alt="" width={80}/>
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
      <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">We are here for your health</h2>
        <p className="text-neutralGrey">Caring for the health  needs of our community</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {
          services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
            <div>
              <div className="h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" width={100} className="-ml-5" /></div>
              <h4 className="text-5xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
              <p className="text-xl text-brandPrimary font-semibold">{service.description}</p>
            </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Services;