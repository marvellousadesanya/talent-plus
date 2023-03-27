import { useState, useRef, useEffect } from "react";

// Components
import Services from "../components/Services";
import { partnerIcons } from "../components/partners";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import { servicesIcons, servicesTitles } from "../components/servicesData";
import { coursesData } from "../components/coursesData";
import Testimonial, { testimonialImages } from "../components/Testimonial";

import { motion } from "framer-motion";

// FAQ component
import Faq from "react-faq-component";
import { faqData } from "../components/faqData";
import { faqStyles } from "../components/faqData";
import { faqConfig } from "../components/faqData";

import usersJoined from "../images/usersjoined.png";
import heroImage from "../images/heroimage.png";

// Decorative images
import enrolledStudents from "../images/enrolledstudents.png";
import manMac from "../images/manandmac.png";
import womanMac from "../images/womanandmac.png";
import boyMac from "../images/boyandmac.png";
import theWorld from "../images/the-world.png";

import manandWoman from "../images/mobile-section.png";

// Icons
import specialIcon1 from "../images/special-icon-1.png";
import specialIcon2 from "../images/special-icon-2.png";
import specialIcon3 from "../images/special-icon-3.png";
import specialIcon4 from "../images/special-icon-4.png";

const images = [
  { id: 1, imageUrl: "https://picsum.photos/id/1015/603/400" },
  { id: 2, imageUrl: "https://picsum.photos/id/102/603/400" },
  { id: 3, imageUrl: "https://picsum.photos/id/104/603/400" },
  { id: 4, imageUrl: "https://picsum.photos/id/107/603/400" },
];

const LandingPage = () => {
  // For carousel
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const paginate = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <header className="w-fill bg-themeColor h-screen block sm:flex flex-auto justify-center items-center sm:pl-28 overflow-hidden">
        <div className="sm:w-[600px]">
          <h1 className="font-bold font-heading sm:text-6xl text-center sm:text-left text-[#fff] text-3xl mt-4">
            Grow Your skills to advance your career path
          </h1>
          <p className="font-body text-[#fff] mt-4 sm:w-[600px] text-center text-[8px]">
            Build your future with our quality education. The best and largest
            all-in-one
            <br /> online tutoring platform in the world
          </p>
          <div className=" flex space-x-2 font-body text-[#fff] mt-4 justify-center sm:block">
            <button className="border border-[#fff] rounded h-[28px] text-[8px] sm:text-xs sm:h-14 w-[110px] sm:w-52">
              Get Started Now
            </button>
            <button className="bg-[#fff] text-themeColor text-[8px] sm:text-xs rounded h-[27px] sm:h-14 w-[73px] sm:w-36">
              Enroll Now
            </button>
          </div>
          <div className="flex mt-4 space-x-2 justify-center">
            <img
              src={usersJoined}
              alt=""
              className="sm:hidden w-[121px] h-[32px]"
            />
            <img src={usersJoined} alt="" className="hidden sm:block" />
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
            className="w-[1000px] h-[700px] sm:w-[800px] self-center"
          />
        </div>
      </header>

      <section className="w-full bg-[#CCDBF0] h-14 sm:h-40 flex overflow-hidden space-x-5 sm:space-x-12 justify-center items-center">
        {partnerIcons.map((icon, index) => (
          <img
            className="sm:h-9 h-2.5"
            key={index}
            src={icon}
            alt={`Image ${index}`}
          />
        ))}
      </section>

      <section className=" bg-[#F8F9FC] relative sm:h-[700px] px-6 sm:px-[120px] block sm:flex 2xl:space-x-24 justify-center items-center">
        <div className="2xl:w-[694px]">
          <h2 className="font-bold font-heading text-2xl text-center sm:text-left sm:text-6xl text-[#000F24] sm:h-[140px]">
            High Quality video, audio & live classes
          </h2>
          <p className="text-[#A1A1A1] text-[8px] sm:text-base text-center font-body sm:mt-4 sm:w-[520px]">
            High-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img
            src={enrolledStudents}
            alt="enrolled students"
            className="hidden sm:absolute top-[270px] 2xl:top-1/3 left-1/2"
          />
          <div className="flex justify-center sm:block">
            <button className=" mt-4 bg-themeColor text-[#fff] text-[8px] sm:text-base rounded font-body px-4 sm:px-16 py-2 sm:py-5">
              View Courses
            </button>
          </div>

          <div className="sm:block flex justify-center">
            <div className="font-semibold font-body grid grid-cols-2 mt-4 sm:w-[474px] gap-y-4">
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon1}
                  alt=""
                  className="h-[17px] sm:w-8 sm:h-8 text-[8px]"
                />
                <p className="text-[8px] font-body font-bold">Audio Classes</p>
              </div>
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon2}
                  alt=""
                  className="h-[17px] sm:w-8 sm:h-8 text-[8px]"
                />
                <p className="text-[8px]">Live Classes</p>
              </div>
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon3}
                  alt=""
                  className="h-[17px] sm:w-8 sm:h-8 "
                />
                <p className="text-[8px]">Recorded Classes</p>
              </div>
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon4}
                  alt=""
                  className="h-[17px] sm:w-8 sm:h-8 "
                />
                <p className="text-[8px]">50+ Notes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img src={manandWoman} alt="" className="sm:hidden block mt-6" />

          <img src={manMac} alt="" className="hidden sm:block" />
        </div>
        <img
          src={womanMac}
          alt=""
          className="hidden sm:absolute bottom-4 left-1/2 2xl:left-1/3"
        />
      </section>

      <section className="w-full bg-[#F8F9FC] block sm:flex justify-center overflow-hidden px-4 sm:space-x-14 sm:px-[120px] 2xl:space-x-[130px]">
        <div className="2xl:w-[702px] sm:w-[500px]">
          <h2 className="font-heading font-bold text-2xl text-center sm:text-6xl text-[#000F24] mt-4 sm:px-24">
            This is Why We Are Best From Others
          </h2>
          <p className="mt-4 font-body text-[#A1A1A1] sm:w-[560px] text-center text-[8px] sm:text-base">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img src={boyMac} alt="boy on Mac" className="mt-4 w-[390px]" />
        </div>

        <div className="flex justify-center my-5">
          <div className="grid grid-cols-2 sm:mr-0 gap-x-4 sm:gap-x-8 sm:gap-y-4">
            {servicesIcons.map((icon, index) => (
              <Services key={index} icon={icon} title={servicesTitles[index]} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] flex justify-center w-full mt-4 px-6 sm:px-[120px] overflow-hidden">
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-6xl text-center text-body">
            Browse Our Popular Courses
          </h2>
          <p className="mt-4 font-body text-[#A1A1A1] sm:w-[560px] text-center text-[8px] sm:text-base">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>

          <div className="flex space-x-4 sm:space-x-24 font-body text-[#A1A1A1] font-semibold text-base justify-center">
            <div className="focus:text-themeColor text-[8px] sm:text-xs">
              All categories
            </div>
            <div className="text-[8px] sm:text-xs">Design</div>
            <div className="text-[8px] sm:text-xs">Development</div>
            <div className="text-[8px] sm:text-xs">Marketing</div>
          </div>

          <div className="mt-12 flex justify-center 2xl:w-[1500px] ">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-7">
              {coursesData.map((data) => (
                <Courses
                  title={data.courseTitle}
                  mentor={data.courseMentor}
                  price={data.coursePrice}
                  category={data.courseCategory}
                  coverImg={data.courseCoverPage}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-themeColor text-[#fff] text-[8px] sm:text-base font-body rounded py-2 sm:py-4 text-center px-4 sm:px-8">
              Explore All Courses
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] w-full py-20 overflow-hidden">
        <h2 className=" font-bold font-heading text-2xl sm:text-6xl text-[#000F24] text-center mt-8">
          What Our Clients Are Saying
        </h2>
        <p className="text-base text-[#A1A1A1] text-center px-[300px] py-8">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>

        <div className="">
          <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }}>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex flex-auto space-x-4"
            >
              <motion.div
                // style={{
                //   x: `-${currentSlide * 603}px`,
                // }}
                // drag="x"
                // dragConstraints={{ left: 0, right: 0 }}

                className="bg-[#fff] w-[603px] shrink-0 rounded"
              >
                <p className="text-[#A1A1A1] text-sm">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition. high-defination video is video of higher
                  resolution and quality than standard definition. build your
                  future with our quality education. the best and largest
                  all-in-one online tutoring platform in the world
                </p>
                <div className="flex">
                  <img src="" alt="" />
                  <div>
                    <h3 className="font-bold font-body text-sm">Bella Moon</h3>
                    <p className="text-xs text-[#A1A1A1]">Product Designer</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                // style={{
                //   x: `-${currentSlide * 603}px`,
                // }}
                // drag="x"
                // dragConstraints={{ left: 0, right: "-603px" }}
                className="bg-[#fff] w-[603px] shrink-0 rounded"
              >
                <p>
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition. high-defination video is video of higher
                  resolution and quality than standard definition. build your
                  future with our quality education. the best and largest
                  all-in-one online tutoring platform in the world
                </p>
              </motion.div>
              <motion.div className="bg-[#fff] w-[603px] shrink-0 rounded">
                <p>
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition. high-defination video is video of higher
                  resolution and quality than standard definition. build your
                  future with our quality education. the best and largest
                  all-in-one online tutoring platform in the world
                </p>
              </motion.div>
              <motion.div className="bg-[#fff] w-[603px] shrink-0 rounded">
                <p>
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition. high-defination video is video of higher
                  resolution and quality than standard definition. build your
                  future with our quality education. the best and largest
                  all-in-one online tutoring platform in the world
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-themeColor flex justify-center w-full sm:px-[120px] py-12">
        <div>
          <h4 className="text-center text-[#fff] font-body text-[8px]">
            JOIN OUR COMMUNITY
          </h4>
          <h2 className="font-heading text-2xl sm:text-6xl font-bold text-[#fff] text-center 2xl:w-[1200px]">
            Are you ready to connect with the future talent of the tech world?
          </h2>
          <p className="text-center text-[8px] text-xs text-[#fff] font-body">
            Meet up with other techstars and grow together
          </p>
          <div className="flex justify-center">
            <img src={theWorld} alt="" />
          </div>

          <div className="flex justify-center">
            <button className="text-themeColor text-[8px] bg-[#fff] font-body font-bold px-3 sm:px-8 py-2 sm:py-3 rounded">
              Join our Community
            </button>
          </div>
        </div>
      </section>

      <section className="w-full sm:px-[120px] py-20 flex justify-center">
        <div>
          <h2 className="font-heading text-2xl sm:text-6xl font-bold text-[#000F24] text-center 2xl:w-[1200px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A1A1A1] text-[8px] sm:text-xs text-center">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>

          <div className="font-body sm:px-[100px] font-bold px-4">
            <Faq styles={faqStyles} data={faqData} config={faqConfig} />
          </div>
        </div>
      </section>

      {/* <section className="py-12">
        <div className="carousel-container">
          <div className="carousel flex">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="carousel-item"
                style={{
                  x: `-${currentSlide * 603}px`,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
              >
                <img src={image.imageUrl} alt={`Carousel item ${index}`} />
              </motion.div>
            ))}
          </div>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  index === currentSlide ? "bg-themeColor" : "bg-[#A1A1A1]"
                }`}
                onClick={() => paginate(index)}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="w-full flex-auto">
        {testimonialImages.map((testimonial) => (
          <Testimonial img={testimonial} />
        ))}
      </section> */}

      <Footer />
    </div>
  );
};

export default LandingPage;
