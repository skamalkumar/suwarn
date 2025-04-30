import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/images/FinWorld-Logo.png" alt="logo" className="h-10 w-auto" />
            <h1 className="text-3xl font-semibold">Financ</h1>
          </div>
          <p className="text-sm mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipiscing elit hac porta, tempus eros mollis facilisis vestibulum.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lime-400 font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Financial Planning</li>
            <li>Investment Management</li>
            <li>Retirement Planning</li>
            <li>Investment Analysis</li>
            <li className="text-lime-300">Insurance</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-lime-400 font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Partner</li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <h2 className="text-lime-400 font-semibold mb-4">Let's Talk!</h2>
          <p className="text-sm text-gray-300 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit hac facilisis vestibulum.
          </p>
          <button className="bg-lime-400 text-black px-4 py-2 font-semibold hover:bg-lime-500 transition">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-6"></div>

      {/* Contact Info & Social */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 gap-4 text-sm text-white">
          <div className="flex items-center space-x-2">
            <MdLocationOn className="text-xl" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-400">Jl. Soekarno–hatta KM 03</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-xl" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-400">+187-5840–8547</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-xl" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400">finance@mail.com</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <p className="font-semibold text-sm">Social Media</p>
          <FaFacebookF className="hover:text-lime-400 cursor-pointer" />
          <FaTwitter className="hover:text-lime-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-lime-400 cursor-pointer" />
          <FaInstagram className="hover:text-lime-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
