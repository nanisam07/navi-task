'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import NavbarMenu from '@/components/ui/Navbar';
import Footer from "@/components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
  };

  const offices = [
    {
      title: 'Corporate Office 1',
      address:
        'Manikonda, Rangareddy Dist, Hyderabad, Telangana – 500089, India',
    },
    {
      title: 'Corporate Office 2',
      address:
        'OU Colony Main Road, Shaikpet, Rangareddy, Telangana – 500089',
    },
    {
      title: 'Regional Office 1',
      address: 'Jeevarathinam Nagar, Adyar, Chennai, Tamilnadu – 600020',
    },
    {
      title: 'Regional Office 2',
      address:
        'Revenue Colony, 1st Floor, Ward no: 11, Block No:4, Moghairajpuram, Vijayawada',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavbarMenu />
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-800 text-white text-center px-6">
        <Fade direction="down" triggerOnce>
          <h1 className="text-5xl font-extrabold mb-4">
            Start Your Journey with NAVNI
          </h1>
          <p className="text-lg max-w-2xl mb-8">
            We specialize in reliable and innovative post-tensioning services.
            Reach out to us for collaborations or consultations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100"
          >
            Contact Now
          </motion.button>
        </Fade>
      </section>

      {/* Form + Info Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 space-y-16">
        <Slide direction="left" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Submit
                </motion.button>
              </form>
            </div>

            {/* Info Card */}
            <motion.div
              className="md:order-1 bg-gradient-to-tr from-indigo-100 to-purple-100 p-10 rounded-xl shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                Need help or a quote?
              </h3>
              <p className="text-sm mb-4">
                Let us know what you need, and we’ll get back to you within 24
                hours.
              </p>
              <ul className="text-sm space-y-1">
                <li>📞 +91 9697799299 / +91 9100945658</li>
                <li>📧 info@navni.in</li>
              </ul>
            </motion.div>
          </div>
        </Slide>

        {/* Office Cards */}
        <Fade cascade direction="up" triggerOnce>
          <div>
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
              Our Locations
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-600 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">
                    {office.title}
                  </h3>
                  <p className="text-sm">📍 {office.address}</p>
                  <p className="mt-2 text-sm">📞 +91 9697799299 / +91 9100945658</p>
                  <p className="text-sm">📧 info@navni.in</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Fade>
      </section>
{/* Footer */}
      <div className="mt-24 w-full">
        <Footer />
      </div>
      
    </div>
    </div>
  );
}
