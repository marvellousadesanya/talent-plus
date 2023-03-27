import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import testimonialImg1 from "../images/testimonial-img-1.png";
import testimonialImg2 from "../images/testimonial-img-2.png";
import testimonialImg3 from "../images/testimonial-img-3.png";
import testimonialImg4 from "../images/testimonial-img-4.png";

export const testimonialImages = [
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4,
];

const Testimonial = ({ name, img }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
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

            className="bg-[#fff] py-10 px-6 w-[603px] shrink-0 rounded"
          >
            <p className="text-[#A1A1A1] text-sm">
              high-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition. hbuild your
              future with our quality education. the best and largest all-in-one
              online tutoring platform in the worldd definition. high-defination
              video is video of higher resolution and quality than standard
              definition. build your future with our quality education. the best
              and largest all-in-one online tutoring platform in the world
            </p>
            <div className="flex pt-6 space-x-2">
              <img src={img} alt="" />
              <div>
                <h3 className="font-bold font-body text-sm">{name}</h3>
                <p className="text-xs text-[#A1A1A1]">Product Designer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
