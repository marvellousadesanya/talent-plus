const Services = ({ icon, title }) => {
  return (
    <div className="bg-[#fff] w-[280px] 2xl:w-[307px] h-[302px] rounded flex justify-center items-center">
      <div className="w-[240px] 2xl:w-[280px] ">
        <img src={icon} alt="" />

        <h3 className="font-bold font-body">{title}</h3>
        <p className="text-[#A1A1A1] text-xs leading-7">
          high-defination video is video of higher resolution and quality than
          standard definition. high-defination video is video of higher
          resolution and quality than standard definition.
        </p>
      </div>
    </div>
  );
};

export default Services;
