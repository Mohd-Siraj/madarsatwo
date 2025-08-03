"use client";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import CTAButton from "./CTAButton";

const TabContent = ({ data }) => {
  const handleCTAClick = () => {
    console.log(`CTA clicked for ${data.title}`);
    // Add your CTA logic here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Banner data={data} />
      <HowItWorks data={data} />
      {/* <CTAButton text={data.cta} onClick={handleCTAClick} /> */}
    </div>
  );
};

export default TabContent;
