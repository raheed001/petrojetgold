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
            <h4 className="text-gray-200 font-semibold sm:pb-2">Follow Us</h4>
            <li>
              <a href="javascript:void()" className="duration-150 hover:text-gray-400">Facebook</a>
            </li>
            <li>
              <a href="javascript:void()" className="duration-150 hover:text-gray-400">Twitter</a>
            </li>
            <li>
              <a href="javascript:void()" className="duration-150 hover:text-gray-400">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
          <p className="text-gray-300">© 2024 Petrojet Inc. All rights reserved.</p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6 sm:mt-0">
            <a href="javascript:void()">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
            </a>
            <a href="javascript:void()">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
            </a>
            <a href="javascript:void()">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g fill="currentColor" clipPath="url(#clip0_910_44)"><path fillRule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.155v-3.942c-6.681 1.154-8.102-3.014-8.102-3.014a6.65 6.65 0 00-2.71-3.529c-2.21-1.52.164-1.54.164-1.54a5.348 5.348 0 013.954 2.759 5.44 5.44 0 004.68 3.065 5.195 5.195 0 001.876-.34 5.59 5.59 0 011.65-3.302c-5.353-.616-10.982-2.694-10.982-11.97a9.163 9.163 0 012.305-6.197 8.618 8.618 0 01.207-6.13s2.026-.66 6.644 2.434a23.04 23.04 0 016.045-.814 23.03 23.03 0 016.045.814c4.614-3.095 6.64-2.434 6.64-2.434a8.618 8.618 0 01.208 6.13 9.163 9.163 0 012.302 6.197c0 9.295-5.635 11.348-10.992 11.94a6.306 6.306 0 011.859 4.875v5.91c0 .83.403 1.35 1.675 1.118a23.996 23.996 0 0015.372-10.25 23.752 23.752 0 003.146-16.161 23.834 23.834 0 00-8.135-14.362A24.087 24.087 0 0024 1z" clipRule="evenodd" /><path d="M9.159 35.286c-.053.12-.24.156-.41.073-.174-.08-.274-.24-.218-.36.053-.12.24-.156.41-.073.174.08.274.24.218.36zm.386.438c-.114.107-.337.056-.488-.115a.418.418 0 01-.088-.505c.115-.108.336-.056.49.114.148.173.2.405.086.506zm.563.64c-.146.102-.384.006-.53-.215-.146-.217-.146-.483 0-.586.146-.102.384-.01.53.208.146.217.146.49 0 .593zm1.097.239c-.066.146-.287.213-.484.15-.2-.064-.327-.237-.265-.384.066-.146.287-.217.484-.148.2.064.33.23.265.382zm1.068.073c.008.154-.173.28-.389.283-.217.006-.392-.115-.396-.267-.004-.154.173-.279.39-.285.22-.002.392.115.395.27zm.977-.197c.03.147-.112.301-.317.34-.203.037-.402-.055-.438-.197-.03-.151.112-.306.317-.344.206-.034.403.053.438.201zm0 0" /></g><defs><clipPath id="clip0_910_44"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
