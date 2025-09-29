
import FlipCard from "../components/FlipCard";

const FAQ = () => {
  return (
     <div className="w-full relative bg-cover bg-center flex flex-col ">
      <div 
        className="w-full relative bg-cover bg-center flex flex-col justify-center px-8 pt-[100px] mb-10"
      >

       {/* Hero content */}
<div className="relative z-10 max-w-[1200px] mx-auto text-center md:text-left px-4 sm:px-6">
  {/* Line + Text above */}
  <div>
    <p className="text-[#A05525] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
      Frequently Asked Question
    </p>
  </div>
</div>

          </div>


<div className="text-[#C0A18C] gap-5 m-3 p-3 flex flex-col justify-center items-center">
  <p className="text-base sm:text-lg md:text-xl font-semibold text-center">
    HOW CAN WE HELP YOU?
  </p>

  <p className="text-[#004F35] font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center max-w-[90%] sm:max-w-[600px] md:max-w-[900px]">
    Discover Frequently Asked Questions from Our Support
  </p>

  <span className="h-[2px] w-16 sm:w-20 bg-gradient-to-r from-[#C0A18C] to-transparent self-center"></span>
</div>

<div>
  <FlipCard/>
</div>



    </div>
  )
}

export default FAQ