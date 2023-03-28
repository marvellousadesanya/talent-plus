import Logo from "../images/logo.png";

const NavBarDesktop = () => {
  return (
    <nav className="hidden sm:flex items-center justify-between p-12 bg-themeColor w-full text-[#fff] font-body text-base">
      <div className="">
        <img alt="" src={Logo} />
      </div>

      <div className="flex space-x-7 items-center">
        <ul className="flex space-x-5">
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Testimonial</li>
          <li>Community</li>
        </ul>

        <div>
          <button className="bg-[#fff] rounded text-themeColor py-4 px-8 font-bold">
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
