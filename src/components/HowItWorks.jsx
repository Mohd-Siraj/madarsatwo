import CTAButton from "./CTAButton";

const HowItWorks = ({ data }) => {
  return (
    <div className="mb-8">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {data.howItWorks.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {data.howItWorks.description}
            </p>
          </div>
          <div className="w-full">
            <div className="text-center text-sm text-gray-500 mb-4">
              STRUGGLING TO FIND A PERFECT TUTOR
            </div>
            <CTAButton text={data.cta} />
          </div>
        </div>
        <div className="space-y-6">
          {data.steps.map((step, index) => (
            <div key={index} className="border-l-4 border-purple-200 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-6">
        {/* Title and Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {data.howItWorks.title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {data.howItWorks.description}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {data.steps.map((step, index) => (
            <div key={index} className="border-l-4 border-purple-200 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section - Now at bottom on mobile */}
        <div className="w-full">
          <div className="text-center text-sm text-gray-500 mb-4">
            STRUGGLING TO FIND A PERFECT TUTOR
          </div>
          <CTAButton text={data.cta} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
