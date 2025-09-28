import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[700px] md:h-[650px] sm:h-[550px] flex items-center justify-center">
     
     {/* image */}
      <div className="absolute inset-0">
        <img
          src="pexels1.jpg"
          alt="bgimage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B5241] mb-4 sm:mb-6">
          Unlock Your Potential with Our Courses
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
          Our courses are designed for everyone — whether you’re just starting your journey 
          or aiming to master advanced skills. Join thousands of learners{' '}
          <span className="font-semibold text-[#1B5241]">
            gaining the tools, knowledge, and confidence
          </span>{' '}
          to achieve success in today’s fast-paced digital world.
          <br />
          Are you ready to start?
        </p>

        <NavLink
          to="/courses"
          className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-lg font-semibold text-white bg-[#1B5241] rounded-lg shadow-lg 
                     transition-all duration-300 hover:bg-[#A05525]"
        >
          Enroll Now
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
