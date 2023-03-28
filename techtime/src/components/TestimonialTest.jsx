const TestimonialTest = ({ name, img }) => {
  return (
    <div className="bg-[#fff] py-10 px-6 w-[603px] shrink-0 rounded">
      <p className="text-[#A1A1A1] text-sm">
        high-defination video is video of higher resolution and quality than
        standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our
        quality education. the best and largest all-in-one online tutoring
        platform in the worldd definition. high-defination video is video of
        higher resolution and quality than standard definition. build your
        future with our quality education. the best and largest all-in-one
        online tutoring platform in the world
      </p>
      <div className="flex pt-6 space-x-2">
        <img src={img} alt="" />
        <div>
          <h3 className="font-bold font-body text-sm">{name}</h3>
          <p className="text-xs text-[#A1A1A1]">Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTest;
