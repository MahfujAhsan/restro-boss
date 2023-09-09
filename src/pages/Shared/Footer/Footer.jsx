import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer>
          <div className="flex justify-center text-white h-[250px] mx-2 md:mx-0">
              <div className="bg-purple-700/50 backdrop-blur-xl bg-opacity-70 w-1/2 text-center flex flex-col justify-center rounded-tl-lg">
                  <h2 className='text-xl md:text-2xl uppercase font-semibold mb-3'>Contact Us</h2>
                  <p className='text-sm md:text-base'>123 ABS Street, Uni 21, Bangladesh</p>
                  <p className='my-2 md:my-1 text-sm md:text-base'>+88 123456789</p>
                  <p>Mon - Fri: 08:00 - 22:00</p>
                  <p className='my-1 text-sm md:text-base'>Sat - Sun: 10:00 - 23:00</p>
              </div>
              <div className="bg-yellow-500/50 backdrop-blur-xl bg-opacity-70 w-1/2 text-center flex flex-col justify-center rounded-tr-lg">
                  <h2 className='text-xl md:text-2xl uppercase font-semibold mb-3 '>Follow Us</h2>
                  <p className='mb-3'>Join us on social media</p>
                  <div className='flex justify-center space-x-4'>
                      <Link to="/"><FaFacebook size={20} /></Link>
                      <Link to="/"><FaInstagram size={20} /></Link>
                      <Link to="/"><FaTwitter size={20} /></Link>
                  </div>
              </div>
          </div>
          <p className='text-center text-white rounded-bl-lg rounded-br-lg text-sm py-2 font-mono mx-2 md:mx-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700'>Copyright © CulinaryCloud. All rights reserved.</p>
      </footer>
  )
}

export default Footer