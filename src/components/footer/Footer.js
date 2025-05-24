import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png"; // adjust if needed
import { navLinksdata } from "../../constants"; // adjust if needed

const Footer = () => {
  return (
    <div className="w-full py-10 border-t border-t-black">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6 px-4 text-center">
        {/* Logo */}
        <img className="w-28" src={logo} alt="logo" />

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/shazima-kouser-924b55300/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/ShazimaKouser"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
        </div>


        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 font-titleFont font-medium text-lg text-white">
          {navLinksdata.map((item) => (
            <li
              key={item._id}
              className="cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
