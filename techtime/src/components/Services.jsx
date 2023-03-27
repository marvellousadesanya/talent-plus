const Services = ({ icon, title }) => {
  return (
    <div className="bg-[#fff] w-[194px] sm:w-[280px] 2xl:w-[307px] sm:h-[302px] rounded flex justify-center items-center">
      <div className="w-[180px] sm:w-[240px] 2xl:w-[280px] ">
        <img src={icon} alt="" />

        <h3 className="font-bold font-body text-xs sm:text-base">{title}</h3>
        <p className="text-[#A1A1A1] w-[162px] text-[8px] sm:text-xs sm:leading-7">
          high-defination video is video of higher resolution and quality than
          standard definition. high-defination video is video of higher
          resolution and quality than standard definition.
        </p>
      </div>
    </div>
  );
};

export default Services;
