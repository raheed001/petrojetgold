'use client';
import React from 'react';

const Footer: React.FC = () => {
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
        { href: '#about-us', name: 'About Us' },
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
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
              <div className="relative">
                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input
                  type="email"
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
            <svg style={{ width: '100px', height: '90px',marginLeft:'-20px' }} className="hover:text-gray-500 duration-150 mt-11" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.393,13.467c-0.809-0.809-2.121-0.809-2.93,0l-0.516,0.516l-2.93-2.93l0.516-0.516c0.809-0.809,0.809-2.121,0-2.93	s-2.121-0.809-2.93,0c-0.517,0.517-0.7,1.239-0.556,1.904c0.123,0.919,0.606,3.029,2.509,4.932c1.903,1.903,4.013,2.386,4.932,2.509	c0.665,0.144,1.387-0.039,1.904-0.556C17.202,15.587,17.202,14.276,16.393,13.467z" fill="currentColor"/>
</svg>

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
