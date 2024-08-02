'use client';
import React from 'react';

const Footer: React.FC = () => {

  const footerItems = [
      {
          label: "Resources",
          items: [
              { href: '#contact', name: 'Contact Us' },
              { href: '#support', name: 'Customer Support' },
              { href: '#documentation', name: 'Documentation' },
              { href: '#pricing', name: 'Pricing' },
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
      {
          label: "Projects",
          items: [
              { href: '#showcase', name: 'Project Showcase' },
              { href: '#roadmap', name: 'Project Roadmap' },
              { href: '#languages', name: 'Supported Languages' },
              { href: '#blog', name: 'Company Blog' },
          ]
      },
      {
          label: "Careers",
          items: [
              { href: '#partners', name: 'Our Partners' },
              { href: '#team', name: 'Meet the Team' },
              { href: '#careers', name: 'Career Opportunities' },
          ],
      }
  ];

  return (
      <footer className="pt-10 bg-black">
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
                  {
                      footerItems.map((item, idx) => (
                          <ul
                              className="space-y-4 text-gray-300"
                              key={idx}
                          >
                              <h4 className="text-gray-200 font-semibold sm:pb-2">
                                  {item.label}
                              </h4>
                              {
                                  item.items.map((el, idx) => (
                                      <li key={idx}>
                                          <a
                                              href={el.href}
                                              className="duration-150 hover:text-gray-400"
                                          >
                                              {el.name}
                                          </a>
                                      </li>
                                  ))
                              }
                          </ul>
                      ))
                  }
              </div>
              <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                  <p className="text-gray-300">© 2024 Petrojet Inc. All rights reserved.</p>
                  <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                      <a href="javascript:void()">
                          <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                      </a>
                      <a href="javascript:void()">
                          <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                      </a>
                      <a href="javascript:void()">
                          <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g fill="currentColor" clipPath="url(#clip0_910_44)"><path fillRule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.155v-3.942c-6.681 1.154-8.102-3.014-8.102-3.014a6.65 6.65 0 00-2.71-3.529c-2.21-1.52.164-1.54.164-1.54a5.348 5.348 0 013.954 2.759 5.464 5.464 0 007.424 2.084 5.361 5.361 0 011.585-3.439c-5.333-.592-10.932-2.635-10.932-11.76a9.243 9.243 0 012.296-6.277 8.619 8.619 0 01.226-6.19s2.01-.65 6.603 2.465a22.798 22.798 0 0112.012 0c4.58-3.115 6.588-2.465 6.588-2.465a8.62 8.62 0 01.226 6.19 9.241 9.241 0 012.295 6.277c0 9.148-5.61 11.153-10.953 11.735a5.995 5.995 0 011.718 4.618v6.84c0 .605.419 1.4 1.657 1.156a23.977 23.977 0 0012.937-10.29 23.752 23.752 0 003.153-16.172 23.832 23.832 0 00-8.135-14.351A24.086 24.086 0 0024 1z" clipRule="evenodd" /><path d="M9.327 34.641c-.052.118-.236.153-.4.072-.17-.078-.265-.234-.213-.352.048-.118.233-.153.403-.071.168.079.264.234.21.351zm.31.405c-.111.105-.328.056-.474-.112-.149-.166-.171-.383-.058-.488.114-.105.325-.056.475.111.149.167.173.384.057.489zm.501.582c-.147.103-.39.006-.54-.205-.147-.21-.147-.463.002-.566.148-.102.39-.01.54.2.147.212.148.464-.002.57zm.746.338c-.132.146-.415.106-.623-.09-.21-.196-.272-.48-.142-.626.132-.147.418-.105.627.09.208.196.274.48.138.627zm1.006.05c-.06.194-.315.28-.577.19-.26-.09-.429-.334-.369-.53.06-.196.315-.283.576-.192.263.092.43.336.37.531zm1.003-.11c0 .2-.224.364-.502.365-.278 0-.504-.16-.504-.359 0-.2.226-.364.504-.365.278 0 .502.161.502.36zm1.002-.027c.035.195-.151.397-.418.45-.265.051-.523-.07-.557-.265-.035-.197.15-.4.417-.451.266-.05.523.069.558.266zm0 0" /></g><defs><clipPath id="clip0_910_44"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                      </a>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer;
