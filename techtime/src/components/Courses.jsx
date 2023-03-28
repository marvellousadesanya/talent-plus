const Courses = ({ mentor, title, price, category, coverImg }) => {
  return (
    <div className="w-[194px] sm:w-[400px] 2xl:w-[30rem] overflow-hidden transition-all duration-300 ease-in-out opacity-100">
      <div className="sm:w-[320px] 2xl:w-[27rem]">
        <img src={coverImg} alt="" className="w-[176px] sm:w-[439px]" />
        <div className="flex justify-between mt-2">
          <p className="bg-[#1E5DCE] text-[6px] sm:text-xs font-body text-themeColor rounded-3xl px-2 bg-opacity-20 font-bold">
            {category}
          </p>
          <p className="text-[#A1A1A1] text-[5px] sm:text-xs">4.7k (32.7k+)</p>
        </div>
        <h3 className="text-[#000F24] font-bold font-heading text-[8px] sm:text-2xl mt-2 sm:mt-4">
          {title}
        </h3>
        <div className="flex justify-between font-body text-[5px] sm:text-base text-[#A1A1A1] pr-3">
          <p>23 hrs ago</p>
          <p>15 Lessons</p>
        </div>

        <div className=" flex justify-between font-body pr-4">
          <div>
            <img src="" alt="" />
            <p className="font-bold text-[6px] sm:text-base">{mentor}</p>
          </div>
          <div>
            <p className="text-themeColor text-[8px] sm:text-xl font-heading font-semibold ">
              ${price}:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
