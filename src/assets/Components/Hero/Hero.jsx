import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-[20px] md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome
              <br className="hidden lg:inline-block" /> To Shopsy
            </h1>
            <div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Shoppers are just browsing.",
                  1000,
                  "Shoppers are looking for inspiration.",
                  1000,
                  "Shoppers are busy,busy,busy!",
                  1000,
                  "Shoppers are back for the fifth time.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  color: "gray",
                }}
                repeat={Infinity}
              />
            </div>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded h-[500px] w-[500px]"
              alt="hero"
              src="https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
