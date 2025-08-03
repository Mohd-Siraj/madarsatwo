"use client";

const CTAButton = ({ text, onClick }) => {
  return (
    <div className="text-center w-full">
      <button
        onClick={onClick}
        className="w-full text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-t from-[#6D2DD3] to-[#A781E5]"
      >
        {text}
      </button>
    </div>
  );
};

export default CTAButton;
