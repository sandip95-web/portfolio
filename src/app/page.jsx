import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src={"/me.png"} alt="me" fill className="object-contain" />
      </div>
      <div className=" h-1/2   flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Creating Digital Futures, Shaping Tomorrow
        </h1>
        <p className="md:text-xl">
          Welcome to my portfolio! Here, you'll find a showcase of my digital
          creations and design projects. Explore my work and see how I blend
          creativity and innovation to shape the future of digital experiences.
          Thank you for visiting!
        </p>
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
