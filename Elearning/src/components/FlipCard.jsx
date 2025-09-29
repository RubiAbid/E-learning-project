import { useState } from "react";

const questions = [
  {
    q: "What types of courses do you offer?",
    a: "Ans: We offer a wide range of courses including technology, business, design, and personal development."
  },
  {
    q: "How do I enroll in a course?",
    a: "Ans: Simply create an account, browse our course catalog, and click 'Enroll Now' on your chosen course."
  },
  {
    q: "Do I get a certificate after completing a course?",
    a: "Ans: Yes, upon successful completion of a course, you will receive a certificate that you can share on your resume or LinkedIn."
  },
  {
    q: "Can I access the courses on mobile?",
    a: "Ans: Absolutely! Our platform is fully responsive, and you can learn anytime, anywhere on any device."
  }
];


const FlipCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="h-auto m-5 p-5 flex flex-col justify-center items-center gap-6 ">
      {questions.map((item, index) => (
        <div key={index} className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center">
          {/* Question Card */}
          <div
            className="w-full p-4 bg-[#A05525] text-white rounded-xl shadow-lg cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="font-bold text-base sm:text-lg md:text-xl">{item.q}</div>
          </div>

          {/* Answer with smooth transition */}
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40 mt-2 p-3" : "max-h-0 p-0"
            } bg-[#d7bfaf] text-[#2c2c2c] rounded-lg shadow-md`}
          >
            <p className="text-sm sm:text-base">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;