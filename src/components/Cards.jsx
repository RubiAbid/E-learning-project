import React from 'react';

const Cards = () => {
  return (
    <div className="bg-[#FFEDE1] w-full py-12 flex flex-col items-center gap-8">
      <p className="text-[#22634C] text-center text-lg sm:text-xl font-semibold">
        Here is How We Help You
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Card 1 */}
        <div className="relative border-2 border-[#9E572B] w-[90%] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[280px] md:h-[300px] rounded-lg flex justify-center items-center shadow-md">
          <img
            src="/pic1.jpg"
            alt="pic1"
            className="w-[90%] sm:w-[320px] h-[200px] sm:h-[270px] object-cover rounded-md"
          />

          {/*  box */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                          bg-[#FFEDE1] w-[160px] sm:w-[200px] h-[45px] sm:h-[50px] flex items-center justify-center border-2 border-[#FFEDE1] rounded-md text-[#004F35] font-bold shadow-md text-sm sm:text-base">
            Learn Digital Skills
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative border-2 border-[#9E572B] w-[90%] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[280px] md:h-[300px] rounded-lg flex justify-center items-center shadow-md">
          <img
            src="/pic2.jpg"
            alt="pic2"
            className="w-[90%] sm:w-[320px] h-[200px] sm:h-[270px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                          bg-[#FFEDE1] w-[160px] sm:w-[200px] h-[45px] sm:h-[50px] flex items-center justify-center border-2 border-[#FFEDE1] rounded-md text-[#004F35] font-bold shadow-md text-sm sm:text-base">
            Start Earning
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative border-2 border-[#9E572B] w-[90%] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[280px] md:h-[300px] rounded-lg flex justify-center items-center shadow-md">
          <img
            src="/pic3.jpg"
            alt="pic3"
            className="w-[90%] sm:w-[320px] h-[200px] sm:h-[270px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                          bg-[#FFEDE1] w-[160px] sm:w-[200px] h-[45px] sm:h-[50px] flex items-center justify-center border-2 border-[#FFEDE1] rounded-md text-[#004F35] font-bold shadow-md text-sm sm:text-base">
            Build Your Business
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
