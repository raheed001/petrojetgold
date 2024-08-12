'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_lbr41bp', 'template_j13duds', form.current!, 'dG9stlsdfeTVDvO6R')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log('FAILED...', error.text);
        alert("An error occurred, please try again.");
      });

    e.currentTarget.reset(); // Reset the form fields
  };

  return (
    <main className="container mx-auto p-4 mt-48">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 rounded-md shadow-md hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3606.19482740215!2d55.39137292538618!3d25.331242577624923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bb9df9bda31%3A0x499f60f6db1262aa!2sPetrojet%20Gold!5e0!3m2!1sen!2sae!4v1723461741735!5m2!1sen!2sae"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map"
          ></iframe>
          <div className="mt-8 text-left space-y-6">
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold text-gray-800">Location</h3>
    <p className="text-gray-600">King Faisal Street, Office # 7, 2nd floor – King Faisal St – Sharjah – UAE</p>
  </div>
  
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
    <p className="text-gray-600">Phone: 06-5390580 | +971 05 24133335</p>
    <p className="text-gray-600">Email: <a href="mailto:info@petrojetgold.com" className="text-blue-500 hover:underline">info@petrojetgold.com</a></p>
  </div>
  
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold text-gray-800">Our Hours</h3>
    <p className="text-gray-600">MON-SAT 08:00 – 17:00</p>
  </div>
</div>

        </div>
      </div>
    </main>
  );
}
