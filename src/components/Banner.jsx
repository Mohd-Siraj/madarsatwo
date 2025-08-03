const Banner = ({ data }) => {
  return (
    <div className="mb-12 bg-[#FEFAEC] px-6 py-4">
      <h2 className="text-4xl md:text-4xl font-bold text-[#564616] mb-8">
        {data.title}
      </h2>

      <div className="flex flex-col gap-3 items-center justify-between mb-8">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-0">
          {data.banner.images.map((image, index) => (
            <div
              key={index}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${data.title} visual ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex w-full justify-between text-[#564616]">
          <p className="  text-left md:text-left">{data.banner.tagline}</p>
          <svg
            className="w-6 h-6 ml-4 hidden md:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
