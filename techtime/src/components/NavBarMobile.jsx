import { useState } from "react";
import Logo from "../images/logo.png";
import menuIcon from "../images/menu-icon.png";

const NavBarMobile = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <nav className="block sm:hidden px-8 w-full bg-themeColor pt-5">
      <div>
        <div className="flex w-full justify-between">
          <div>
            <img src={Logo} alt="" className="w-[53px]" />
          </div>

          <div>
            <img
              src={menuIcon}
              alt=""
              onClick={() => setButtonClicked(!buttonClicked)}
            />
          </div>
        </div>

        {buttonClicked ? (
          <div className="flex justify-center text-center">
            <ul className="flex flex-col text-[#fff] text-xs font-body leading-10">
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Testimonial</li>
              <li>Community</li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBarMobile;
