import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    if (name && email) {
      console.log(`Message sent from ${name} (${email})`);
      setMessageSent(true);
      setName('');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="mx-auto px-10 flex flex-col sm:flex-row sm:justify-between gap-8 items-center">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-between px-20 space-y-4">
          <Link to="home" className="mb-4">
            <img src="/images/logo.png" alt="Logo" className="w-24" />
          </Link>

          <div className="sm:max-w-92 max-w-80">
            <p>
              Join our fitness community to stay up-to-date with the latest workouts, health tips, and more. 
              We’re here to help you achieve your fitness goals!
            </p>
          </div>

          <div className="flex space-x-16 pt-2 text-2xl">
            <a href="https://www.facebook.com" className="hover:text-orange-500" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" className="hover:text-orange-500" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="hover:text-orange-500" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-orange-500" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* New Section: Quick Links */}
        <div className="hidden xl:flex flex-col lg:items-center text-nowrap sm:hidden sm:items-start text-center sm:text-left space-y-2 mt-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className='grid space-y-8'>
            <li><Link to="/workouts" className="hover:text-orange-500">Workouts</Link></li>
            <li><Link to="/nutrition" className="hover:text-orange-500">Nutrition</Link></li>
            <li><Link to="/trainers" className="hover:text-orange-500">Trainers</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center sm:text-right space-y-4">
          <h3 className="text-lg pt-2 font-bold">Send Us a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-xs p-2 border border-white rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[400px] max-w-xs p-2 border border-white rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="w-full max-w-xs p-2 border border-white rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <button
            onClick={handleSendMessage}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mt-2 w-[300px]"
          >
            Send
          </button>
          {messageSent && <p className="text-green-500 text-xs">Thank you for your message!</p>}
        </div>
      </div>
      <div className="bg-gray-800 py-4 mt-8">
        <div className="text-center text-xs">
          &copy; {new Date().getFullYear()} FitnessDome. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
