import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:1/12 lg:w-5/12">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/10/349972065/XI/LX/RO/190307366/online-portal-e-commerce-png-clipart.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Shopsy
            </h2>
            <p className="mt-6 text-gray-600">
              The Shopsy is one of the leading digital e-commerce entities.
              Shopsy is customer-focused innovation that makes high quality
              products accessible to Indian shoppers. Shopsy makes a remarkable
              online shopping experience.
            </p>
            <p className="mt-4 text-grey-600">
              The future of e-commerce is raising tremendously in the upcoming
              e-Commerce space. We continue to deliver high quality products
              with a vision to create a positive impact across globe, Our
              mission is to make this planet a better place to live in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
