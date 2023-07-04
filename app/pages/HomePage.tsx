import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import Typed from "react-typed";


const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[darkcyan]">
          Welcome to
        </p>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
          strings={["O-STORE", "E-SHOP", "SHOPIFY"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
        <div
          className="relative mx-auto"
          style={{ height: "70vh", width: "95vw" }}
        >
          <img src={image1.src} alt="Image 1" className="object-contain" />
          <div className="absolute inset-0 m-28 mt-48 mr-96 pr-64">
            <p className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              nisi debitis? Unde commodi illum esse nemo odit? Harum dolorum,
              quibusdam, ipsa voluptates veniam adipisci aspernatur ullam rem
              quae aperiam atque, nemo exercitationem.
            </p>
            <button className="bg-[darkcyan] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="relative mx-auto"
          style={{ height: "70vh", width: "95vw" }}
        >
          <img src={image2.src} alt="Image 2" className="object-contain " />
          <div className="absolute inset-0 m-48 mt-48">
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              nisi debitis? Unde commodi illum esse nemo odit? Harum dolorum,
              quibusdam, ipsa voluptates veniam adipisci aspernatur ullam rem
              quae aperiam atque, nemo exercitationem.
            </p>
            <button className="bg-[darkcyan] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="relative mx-auto"
          style={{ height: "70vh", width: "95vw" }}
        >
          <img src={image3.src} alt="Image 3" className="object-contain" />
          <div className="absolute inset-0 m-28 mr-96 pr-64 mt-48">
            <p className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              nisi debitis? Unde commodi illum esse nemo odit? Harum dolorum,
              quibusdam, ipsa voluptates veniam adipisci aspernatur ullam rem
              quae aperiam atque, nemo exercitationem.
            </p>
            <button className="bg-[darkcyan] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
              Shop Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomePage
