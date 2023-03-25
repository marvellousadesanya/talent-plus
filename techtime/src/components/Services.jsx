import serviceIcon1 from "../images/services-icon-1.png";

const Services = () => {
  return (
    <div className="bg-[#fff] w-[307px] h-[302px] rounded flex justify-center items-center">
      <div className="w-[280px] ">
        <img src={serviceIcon1} alt="" />
        <h3 className="font-bold font-body">Experienced Mentors</h3>
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
