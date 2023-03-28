import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="sm:h-[700px] h-[1028px] bg-[#000F24] text-[#fff] flex items-center w-full">
      <div className="sm:flex block ml-4 sm:ml-0 justify-around w-full space-y-12 sm:space-y-2">
        <div>
          <img src={logo} alt="" />
          <p className="font-body">
            Reach out to us on any of our social media
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-2xl sm:text-3xl">
            Useful Links
          </h3>
          <ul className="font-body text-base sm:text-2xl font-thin">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Testimonials</li>
            <li>Our Communities</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-2xl sm:text-3xl">
            Community
          </h3>
          <ul className="font-body text-base sm:text-2xl">
            <li>Help Centers</li>
            <li>Partners</li>
            <li>Suggestion</li>
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-2xl sm:text-3xl">
            Subscribe
          </h3>
          <input
            type="text"
            className="bg-[#2A2A2B] h-11 border border-themeColor rounded-l"
            placeholder="nft123@gmail.com"
          />
          <button className="bg-themeColor font-body h-11 px-3 rounded-r">
            Send Message
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
