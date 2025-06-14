





// import React from 'react';
// import AppLayout from '../Layout/AppLayout'; // Adjust path based on your project structure

// export const Contact = () => {
//   return (
//     <AppLayout>
//       <main className="w-full overflow-hidden">
//         {/* Content container with padding-top for Header */}
//         <div className="relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 pt-16 overflow-hidden bg-cover bg-repeat animate-background-slide"
//              style={{ backgroundImage: `url('https://source.unsplash.com/random/1600x900?abstract,technology')` }}>
          
//           {/* Overlay constrained to content area */}
//           <div className="absolute inset-0 bg-white/70 z-10"></div>

//           {/* Content wrapper */}
//           <div className="relative z-20 w-full max-w-6xl space-y-8">
//             <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-blue-700 mb-8">
//               Contact Us
//             </h1>

//             <p className="text-center text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed">
//               We'd love to hear from you! Please feel free to reach out to us with any questions, feedback, or inquiries.
//             </p>

//             {/* Contact Details Section */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//               <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105 duration-300">
//                 <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Location</h2>
//                 <p className="text-gray-700">
//                   123 Main Street<br />
//                   Gorakhpur, Uttar Pradesh<br />
//                   India - 273001
//                 </p>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105 duration-300">
//                 <h2 className="text-2xl font-semibold text-blue-600 mb-3">Email Us</h2>
//                 <p className="text-gray-700">
//                   General Inquiries: <a href="mailto:info@yourcompany.com" className="text-blue-500 hover:underline">info@yourcompany.com</a><br />
//                   Support: <a href="mailto:support@yourcompany.com" className="text-blue-500 hover:underline">support@yourcompany.com</a>
//                 </p>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105 duration-300">
//                 <h2 className="text-2xl font-semibold text-blue-600 mb-3">Call Us</h2>
//                 <p className="text-gray-700">
//                   Phone: <a href="tel:+911234567890" className="text-blue-500 hover:underline">+91 12345 67890</a><br />
//                   Fax: +91 12345 67891
//                 </p>
//               </div>
//             </div>

//             {/* Contact Form Section */}
//             <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mx-auto mb-12">
//               <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">Send Us a Message</h2>
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">Your Name:</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Your Email:</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-gray-700 text-lg font-medium mb-2">Subject:</label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">Your Message:</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="6"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* Map Section */}
//             <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl mx-auto">
//               <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">Find Us on the Map</h2>
//               <div className="aspect-w-16 aspect-h-9">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114295.39767858654!2d83.30821634561026!3d26.75704944983084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990e1f74fb936f3%3A0xc3b8a36c8430e791!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="450"
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Google Map of Gorakhpur"
//                   className="rounded-lg border-0"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </AppLayout>
//   );
// };

// export default Contact;




































import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../Layout/AppLayout'; // Adjust path based on your project structure
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin, FaQuestionCircle } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export const Contact = () => {
  return (
    <AppLayout>
      <main className="w-full overflow-hidden bg-gray-50">
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-20"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold mb-6"
              variants={slideUp}
            >
              Get in <span className="text-yellow-300">Touch</span> with HungryHighway
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl max-w-2xl mx-auto mb-8"
              variants={slideUp}
            >
              We’re here to answer your questions, hear your feedback, or help you explore our delicious offerings!
            </motion.p>
            <motion.a
              href="#contact-form"
              className="inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
              variants={scaleHover}
              whileHover="hover"
            >
              Contact Us Now
            </motion.a>
          </div>
        </motion.section>

        {/* Contact Info Section */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
              variants={slideUp}
            >
              Connect with Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-blue-50 p-8 rounded-xl shadow-md text-center"
                variants={slideUp}
                whileHover="hover"
              >
                <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600">
                  123 Main Street<br />
                  Gorakhpur, Uttar Pradesh<br />
                  India - 273001
                </p>
              </motion.div>
              <motion.div
                className="bg-blue-50 p-8 rounded-xl shadow-md text-center"
                variants={slideUp}
                whileHover="hover"
              >
                <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@yourcompany.com" className="text-blue-600 hover:underline">info@yourcompany.com</a><br />
                  <a href="mailto:support@yourcompany.com" className="text-blue-600 hover:underline">support@yourcompany.com</a>
                </p>
              </motion.div>
              <motion.div
                className="bg-blue-50 p-8 rounded-xl shadow-md text-center"
                variants={slideUp}
                whileHover="hover"
              >
                <FaPhone className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  Phone: <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 12345 67890</a><br />
                  Fax: +91 12345 67891
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-100 to-gray-200"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          id="contact-form"
        >
          <div className="max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8"
              variants={slideUp}
            >
              Send Us a Message
            </motion.h2>
            <motion.form
              className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
              variants={slideUp}
              onSubmit={(e) => e.preventDefault()} // Placeholder for form submission
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <motion.input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <motion.input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <motion.input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your inquiry"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <motion.textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover="hover"
                variants={scaleHover}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
              variants={slideUp}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  question: "How do I place an order?",
                  answer: "Browse our restaurant list, select your favorite dishes, add them to your cart, and proceed to checkout. You’ll receive real-time updates on your order!",
                },
                {
                  question: "What are your delivery hours?",
                  answer: "We offer 24/7 delivery in most areas. Check your location at checkout for specific availability.",
                },
                {
                  question: "Can I partner with HungryHighway as a restaurant?",
                  answer: "Absolutely! Contact us at partners@yourcompany.com to learn about our partnership program.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-md"
                  variants={slideUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <FaQuestionCircle className="text-blue-600 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8"
              variants={slideUp}
            >
              Find Us on the Map
            </motion.h2>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              variants={slideUp}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114295.39767858654!2d83.30821634561026!3d26.75704944983084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990e1f74fb936f3%3A0xc3b8a36c8430e791!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Gorakhpur"
                className="border-0"
              ></iframe>
            </motion.div>
          </div>
        </motion.section>

        {/* Social Connect Section */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
              variants={slideUp}
            >
              Stay Connected
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={slideUp}
            >
              Follow us on social media for the latest updates, offers, and foodie inspiration!
            </motion.p>
            <div className="flex justify-center space-x-8">
              {[
                { icon: FaTwitter, href: "#", color: "text-blue-400" },
                { icon: FaInstagram, href: "#", color: "text-pink-500" },
                { icon: FaLinkedin, href: "#", color: "text-blue-700" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-4xl ${social.color} hover:opacity-80`}
                  variants={scaleHover}
                  whileHover="hover"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.div
          className="py-6 text-center text-gray-600 bg-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <p>© 2025 - All rights reserved by HungryHighway</p>
        </motion.div>
      </main>
    </AppLayout>
  );
};

export default Contact;