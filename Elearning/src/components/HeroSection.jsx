import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen sm:h-[450px] flex items-center justify-center bg-[#FFF7F2] ">
      {/* Content */}
      <div className="text-center px-6 sm:px-8 md:px-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B5241] mb-4 sm:mb-6">
          Unlock Your Potential with Our Courses
        </h1>
        <div className="text-[#333] text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
          Our courses are designed for everyone — whether you’re just starting your journey 
          or aiming to master advanced skills. Join thousands of learners{' '}
          <span className="font-semibold text-[#1B5241]">
            gaining the tools, knowledge, and confidence
          </span>{' '}
          to achieve success in today's fast-paced digital world.
          <br />
          <div className='mt-3 sm:text-xl md:text-2xl font-medium'>Are you ready to start?</div>
        </div>

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
