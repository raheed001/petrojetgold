'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendSubscriptionEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_lbr41bp', 'template_j13duds', form.current!, 'dG9stlsdfeTVDvO6R')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("You are subscribed!");
      }, (error) => {
        console.log('FAILED...', error.text);
        alert("An error occurred, please try again.");
      });

    e.currentTarget.reset(); 
  };

  const footerItems = [
    {
      label: "Resources",
      items: [
        { href: '/contact', name: 'Contact Us' },
      ],
    },
    {
      label: "Company",
      items: [
        { href: '#terms', name: 'Terms of Service' },
        { href: '#license', name: 'License Agreement' },
        { href: '#privacy', name: 'Privacy Policy' },
        { href: '/about', name: 'About Us' },
      ]
    },
  ];

  return (
    <footer className="pt-10 bg-black text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-white text-2xl font-bold">
              Stay Updated with Our Latest News
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form ref={form} onSubmit={sendSubscriptionEmail} className="flex items-center gap-x-3 md:justify-end">
              <div className="relative">
                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerItems.map((item, idx) => (
            <ul className="space-y-4 text-gray-300" key={idx}>
              <h4 className="text-gray-200 font-semibold sm:pb-2">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a href={el.href} className="duration-150 hover:text-gray-400">{el.name}</a>
                </li>
              ))}
            </ul>
          ))}
          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">Connect With Us</h4>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61564053087033" className="duration-150 hover:text-gray-400">Facebook</a>
            </li>
            <li>
              <a href="https://x.com/PetrojetG21434" className="duration-150 hover:text-gray-400">Twitter</a>
            </li>
            <li>
              <a href="https://x.com/PetrojetG21434" className="duration-150 hover:text-gray-400">WhatsApp</a>
            </li>
          </ul>
        </div>
        <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
          <p className="text-gray-300">© 2024 Petrojet Inc. All rights reserved.</p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6 sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61564053087033">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
            </a>
            <a href="https://x.com/PetrojetG21434">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
            </a>
            <a href="https://x.com/PetrojetG21434">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="M36.151 16.748c-.806.359-1.674.602-2.584.71a4.497 4.497 0 001.973-2.479 9.027 9.027 0 01-2.846 1.087 4.49 4.49 0 00-7.648 4.09 12.74 12.74 0 01-9.245-4.688 4.49 4.49 0 001.39 5.986 4.48 4.48 0 01-2.033-.562v.057a4.49 4.49 0 003.6 4.4 4.48 4.48 0 01-2.025.078 4.491 4.491 0 004.192 3.116 8.998 8.998 0 01-6.645 1.856A12.714 12.714 0 0017.27 34.5c8.276 0 12.8-6.857 12.8-12.8 0-.195-.004-.39-.013-.584a9.144 9.144 0 002.236-2.368z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
