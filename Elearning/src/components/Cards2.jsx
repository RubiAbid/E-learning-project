import React from 'react';

const Cards2 = () => {
  const sections = [
    {
      title: "Explore new skills.",
      description:
        "Explore a wide range of courses in AI, business, technology, and more.",
    },
    {
      title: "Earn valuable credentials",
      description:
        "Get certificates for every course you finish and boost your chances of getting hired after your trial ends at no additional cost.",
    },
    {
      title: "Learn from the best",
      description:
        "Take your skills to the next level with expert-led courses and Coursera Coach, your AI-powered guide.",
    },
  ];

  return (
    <div className="w-full bg-[#FFF7F2] py-12 px-4 sm:px-8 md:px-16 flex flex-col gap-10">
      {/* Main heading */}
      <h1 className="text-[#1B5241] text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left mb-8">
        Invest in your career
      </h1>

      {/* Sections */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {sections.map((section, index) => (
          <div key={index} className="flex-1">
            <h4 className="text-[#A05525] text-xl sm:text-2xl font-bold mb-2">
              {section.title}
            </h4>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards2;
