import Services from "../components/Services";
import { partnerIcons } from "../components/partners";

import usersJoined from "../images/usersjoined.png";
import heroImage from "../images/heroimage.png";

import enrolledStudents from "../images/enrolledstudents.png";
import manMac from "../images/manandmac.png";
import womanMac from "../images/womanandmac.png";
import boyMac from "../images/boyandmac.png";

import specialIcon1 from "../images/special-icon-1.png";
import specialIcon2 from "../images/special-icon-2.png";
import specialIcon3 from "../images/special-icon-3.png";
import specialIcon4 from "../images/special-icon-4.png";

const LandingPage = () => {
  console.log(partnerIcons);
  return (
    <div>
      <header className="w-fill bg-themeColor h-screen flex flex-auto justify-center items-center pl-28 overflow-hidden">
        <div className="w-[600px]">
          <h1 className="font-bold font-heading text-6xl text-[#fff]">
            Grow Your skills to advance your career path
          </h1>
          <p className="font-body text-[#fff] mt-4 w-[600px]">
            Build your future with our quality education. The best and largest
            all-in-one online tutoring platform in the world
          </p>
          <div className=" flex space-x-2 font-body text-[#fff] mt-4">
            <button className="border border-[#fff] rounded h-14 w-52">
              Get Started Now
            </button>
            <button className="bg-[#fff] text-themeColor rounded h-14 w-36">
              Enroll Now
            </button>
          </div>
          <div className="flex mt-4 space-x-2">
            <img src={usersJoined} alt="" />
            <h3 className="font-heading text-[#fff]">
              255k+
              <br />
              Previews
            </h3>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="hero image"
            className="h-[700px] w-[800px] self-center"
          />
        </div>
      </header>

      <section className="w-full bg-[#CCDBF0] h-40 flex overflow-hidden space-x-12 justify-center items-center">
        {partnerIcons.map((icon, index) => (
          <img className="h-9 " key={index} src={icon} alt={`Image ${index}`} />
        ))}
      </section>

      <section className=" bg-[#F8F9FC] relative h-[700px] px-[120px] flex 2xl:space-x-24 justify-center items-center">
        <div className="2xl:w-[694px]">
          <h2 className="font-bold font-heading text-6xl text-[#000F24] h-[140px]">
            High Quality video, audio & live classes
          </h2>
          <p className="text-[#A1A1A1] font-body mt-4 w-[520px]">
            High-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img
            src={enrolledStudents}
            alt="enrolled students"
            className="absolute top-[270px] 2xl:top-1/3 left-1/2"
          />
          <button className=" mt-4 bg-themeColor text-[#fff] text-base rounded font-body px-16 py-5">
            View Courses
          </button>

          <div className="font-semibold font-body grid grid-cols-2 mt-4 w-[474px] gap-y-4">
            <div className="bg-[#fff] flex gap-4">
              <img src={specialIcon1} alt="" className="w-8 h-8" />
              Audio Classes
            </div>
            <div className="bg-[#fff] flex gap-4">
              <img src={specialIcon2} alt="" className="w-8 h-8" />
              Live Classes
            </div>
            <div className="bg-[#fff] flex gap-4">
              <img src={specialIcon3} alt="" className="w-8 h-8" />
              Recorded Classes
            </div>
            <div className="bg-[#fff] flex gap-4">
              <img src={specialIcon4} alt="" className="w-8 h-8" />
              50+ Notes
            </div>
          </div>
        </div>
        <div>
          <img src={manMac} alt="" />
        </div>
        <img
          src={womanMac}
          alt=""
          className="absolute bottom-4 left-1/2 2xl:left-1/3"
        />
      </section>

      <section className="bg-[#F8F9FC] flex overflow-hidden">
        <div>
          <h2 className="font-heading font-bold text-6xl text-[#000F24]">
            This is Why We Are Best From Others
          </h2>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img src={boyMac} alt="boy on Mac" />
        </div>
        <div className="grid grid-cols-2">
          <Services />
          <Services />
          <Services />
          <Services />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
