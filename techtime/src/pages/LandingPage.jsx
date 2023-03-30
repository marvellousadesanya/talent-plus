import { useState, useRef, useEffect } from "react";

// Components
import Services from "../components/Services";
import { partnerIcons } from "../components/partners";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import { servicesIcons, servicesTitles } from "../components/servicesData";
import { coursesData } from "../components/coursesData";
import Testimonial from "../components/Testimonial";
import { allTestimonials } from "../components/testimonialData";
import NavBarDesktop from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

import { motion } from "framer-motion";

// FAQ component
import Faq from "react-faq-component";
import { faqData, faqMobileStyles } from "../components/faqData";
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

// Decorative Images
import decorArrow from "../images/decorative-img-arrow.png";

const LandingPage = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("");

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = selectedCategory
    ? coursesData.filter((course) => course.courseCategory === selectedCategory)
    : coursesData;

  console.log(filteredCourses);

  return (
    <div>
      <NavBarDesktop />
      <NavBarMobile />
      <header className="header-section">
        <div className="lg:w-[600px]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 2 }}
            className="header-text"
          >
            Grow Your skills to advance your career path
          </motion.h1>
          <p className="font-body px-4 text-[#fff] mt-4 lg:w-[600px] text-center md:text-center text-xs  lg:text-left">
            Build your future with our quality education. The best and largest
            all-in-one online tutoring platform in the world
          </p>
          <div className=" flex md:flex lg:block space-x-2 font-body text-[#fff] mt-4 justify-center ">
            <button className="border border-[#fff] rounded h-[28px] text-xs sm:text-xs sm:h-14 w-[110px] sm:w-52">
              Get Started Now
            </button>
            <button className="bg-[#fff] text-themeColor text-xs lg:text-xs rounded h-[27px] md:h-14 w-[73px] md:w-36">
              Enroll Now
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="users-images"
          >
            <img src={usersJoined} alt="" className="hidden md:block" />
            <img
              src={usersJoined}
              alt=""
              className="block md:hidden w-[121px]"
            />
            <h3 className="font-heading text-[#fff]">
              255k+
              <p className="font-body">Previews</p>
            </h3>
          </motion.div>
        </div>
        <motion.img
          initial={{ y: 300 }}
          animate={{ y: 0, rotate: 19 }}
          src={decorArrow}
          alt=""
          className="absolute w-[74px] md:w-[111px] top-1/4 right-2 lg:right-[40%] rotate-45 lg:rotate-0 lg:bottom-0 "
        />
        <motion.div
          className="flex justify-center 2xl:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img
            src={heroImage}
            alt="hero image"
            className=" mb-0 pb-0 lg:mt-0 h-[590px] w-[363px] md:h-[890px] md:w-[563px]  lg:block lg:h-[700px] lg:w-[800px] self-center"
          />
        </motion.div>
      </header>

      <section className="partners-section">
        {partnerIcons.map((icon, index) => (
          <img
            className="lg:h-9 h-2.5"
            key={index}
            src={icon}
            alt={`Image ${index}`}
          />
        ))}
      </section>

      <section className="classes-section">
        <div className="2xl:w-[694px]">
          <h2 className="font-bold font-heading text-2xl md:text-3xl text-center md:text-center lg:text-left lg:text-6xl text-[#000F24] lg:h-[140px]">
            High Quality video, audio & live classes
          </h2>
          <p className="text-[#A1A1A1] text-xs lg:text-base text-center font-body lg:mt-4 ">
            High-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img
            src={enrolledStudents}
            alt="enrolled students"
            className="hidden lg:absolute top-[270px] 2xl:top-1/3 left-1/2"
          />
          <div className="flex justify-center lg:block">
            <button className=" mt-4 bg-themeColor text-[#fff] text-xs lg:text-base rounded font-body px-4 lg:px-16 py-2 lg:py-5">
              View Courses
            </button>
          </div>

          <div className="lg:block flex justify-center">
            <div className="font-semibold font-body grid grid-cols-2 mt-4 lg:w-[474px] gap-y-4">
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon1}
                  alt=""
                  className="h-[17px] w-4 lg:w-12 lg:h-12 text-xs"
                />
                <p className="text-xs lg:text-xs font-body font-bold">
                  Audio Classes
                </p>
              </div>
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon2}
                  alt=""
                  className="h-[17px] w-4 lg:w-12 lg:h-12 text-xs"
                />
                <p className="text-xs">Live Classes</p>
              </div>
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon3}
                  alt=""
                  className="h-[17px] w-4 lg:w-12 lg:h-12 "
                />
                <p className="text-xs">Recorded Classes</p>
              </div>
              <div className="bg-[#fff] flex gap-4">
                <img
                  src={specialIcon4}
                  alt=""
                  className="h-[17px] w-4 lg:w-12 lg:h-12 "
                />
                <p className="text-xs">50+ Notes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex justify-center">
          <img
            src={manandWoman}
            alt=""
            className="block md:block lg:hidden  mt-6 md:w-[450px]"
          />

          <img src={manMac} alt="" className="hidden md:hidden lg:block" />
        </div>
        <motion.img
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "Inertia", stiffness: 100, duration: 2 }}
          src={womanMac}
          alt=""
          className="hidden md:hidden  lg:block lg:absolute bottom-4 left-1/2 2xl:left-1/3"
        />
      </section>

      <section className="services-section">
        <div className="shrink lg:w-[570px]">
          <h2 className="headings lg:text-left">
            This is Why We Are Best From Others
          </h2>
          <p className="mt-4 font-body text-[#A1A1A1]  text-center text-xs lg:text-base">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="flex justify-center">
            <img
              src={boyMac}
              alt="boy on Mac"
              className="mt-4 w-[390px] md:w-[600px] lg:w-[712px]"
            />
          </div>
        </div>

        <div className="flex justify-center my-5">
          <div className="grid grid-cols-2 lg:mr-0 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-4">
            {servicesIcons.map((icon, index) => (
              <Services key={index} icon={icon} title={servicesTitles[index]} />
            ))}
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div>
          <h2 className="headings">Browse Our Popular Courses</h2>
          <p className="mt-4 font-body text-[#A1A1A1] text-center text-xs lg:text-base">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>

          <div className="mt-4 flex space-x-4 lg:space-x-24 font-body text-[#A1A1A1] font-semibold text-base justify-center">
            <button
              className="focus:text-themeColor text-xs lg:text-xs"
              onClick={() => filterByCategory("")}
            >
              All categories
            </button>
            <button
              className="focus:text-themeColor text-xs lg:text-xs"
              onClick={() => filterByCategory("Design")}
            >
              Design
            </button>
            <button
              className="focus:text-themeColor text-xs lg:text-xs"
              onClick={() => filterByCategory("Development")}
            >
              Development
            </button>
            <button
              className="focus:text-themeColor text-xs lg:text-xs"
              onClick={() => filterByCategory("Marketing")}
            >
              Marketing
            </button>
          </div>

          <div className="mt-12 flex justify-center w-full 2xl:w-[1500px]">
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-20 lg:grid-cols-3  gap-y-12">
              {filteredCourses.map((data) => (
                <div className="">
                  <Courses
                    title={data.courseTitle}
                    mentor={data.courseMentor}
                    price={data.coursePrice}
                    category={data.courseCategory}
                    coverImg={data.courseCoverPage}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-themeColor text-[#fff] text-xs sm:text-base font-body rounded py-2 sm:py-4 text-center px-4 sm:px-8">
              Explore All Courses
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] w-full py-20 overflow-hidden md:px-10">
        <h2 className="headings">What Our Clients Are Saying</h2>
        <p className=" text-[#A1A1A1] text-center text-xs sm:text-base px-4 py-8">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>

        {/* {allTestimonials.map((testi) => (
          <TestimonialTest name={testi.name} img={testi.img} />
        ))} */}
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
          >
            {allTestimonials.map((testimonial) => (
              <Testimonial name={testimonial.name} img={testimonial.img} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-themeColor flex justify-center w-full md:px-10 sm:px-[120px] py-12">
        <div>
          <h4 className="text-center text-[#fff] font-body text-xs sm:text-xs">
            JOIN OUR COMMUNITY
          </h4>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-6xl font-bold text-[#fff] text-center 2xl:w-[1200px]">
            Are you ready to connect with the future talent of the tech world?
          </h2>
          <p className="text-center text-xs sm:text-xs text-[#fff] font-body">
            Meet up with other techstars and grow together
          </p>
          <div className="flex justify-center">
            <img src={theWorld} alt="" />
          </div>

          <div className="flex justify-center">
            <button className="text-themeColor text-xs sm:text-xs bg-[#fff] font-body font-bold px-3 sm:px-8 py-2 sm:py-3 rounded">
              Join our Community
            </button>
          </div>
        </div>
      </section>

      <section className="w-full sm:px-[120px] md:px-10 py-20 flex justify-center">
        <div>
          <h2 className="headings">Frequently Asked Questions</h2>
          <p className="mt-4 text-[#A1A1A1] text-xs md:text-base text-center">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>

          <div className="font-body sm:px-[100px] font-bold px-4 md:px-4">
            {/* For Desktop */}
            <div className="block sm:hidden">
              <Faq styles={faqMobileStyles} data={faqData} config={faqConfig} />
            </div>
            {/* For Mobile */}
            <div className="hidden sm:block">
              <Faq styles={faqStyles} data={faqData} config={faqConfig} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
