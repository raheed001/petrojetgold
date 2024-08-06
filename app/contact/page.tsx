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
    </main>
  );
}
