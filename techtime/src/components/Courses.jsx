import course1 from "../images/course-1.png";

const Courses = ({ mentor, title, price, category, coverImg }) => {
  return (
    <div className="w-[400px] 2xl:w-[30rem] overflow-hidden">
      <div className="w-[320px] 2xl:w-[27rem]">
        <img src={coverImg} alt="" className="" />
        <div className="flex justify-between mt-2">
          <p className="bg-[#1E5DCE] text-xs font-body text-themeColor rounded-3xl px-2 bg-opacity-20 font-bold">
            {category}
          </p>
          <p className="text-[#A1A1A1] text-xs">4.7k (32.7k+)</p>
        </div>
        <h3 className="text-[#000F24] font-bold font-heading text-2xl mt-4">
          {title}
        </h3>
        <div className="flex justify-between font-body text-base text-[#A1A1A1]">
          <p>23 hrs ago</p>
          <p>15 Lessons</p>
        </div>

        <div className=" flex justify-between font-body">
          <div>
            <img src="" alt="" />
            <p className="font-bold">{mentor}</p>
          </div>
          <div>
            <p className="text-themeColor text-xl font-heading font-semibold">
              ${price}:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
