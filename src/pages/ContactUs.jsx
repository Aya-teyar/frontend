import React, { useState } from 'react';

const ContactUs = () => {
  const [contactMethod, setContactMethod] = useState('email');
  const adminPhoneNumber = "+21355030482"; 

  const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        
        <div className="mb-6">
          <p className="mb-2 text-gray-700">You can contact us via email or phone. If you prefer to call, please use the number below:</p>
          <p className="text-lg font-bold text-[#559268]">{adminPhoneNumber}</p>
        </div>

        <hr className="border-t-2 border-gray-200 mb-6" />

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Contact Method</label>
            <select
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              value={contactMethod}
              onChange={handleContactMethodChange}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
          {contactMethod === 'email' && (
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Your Email"
              />
            </div>
          )}
          {contactMethod === 'phone' && (
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Your Phone Number"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#559268] text-white font-bold rounded-md hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
