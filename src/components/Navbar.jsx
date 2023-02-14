import React from "react";
import { GiInterdiction } from "react-icons/gi";
import { CiTextAlignJustify } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between bg-black h-18 px-2 sm:px-4 py-2.5  dark:bg-gray-900'>
        <div className='flex items-center'>
          <a className=' text-slate-300  logo'> Nona</a>
          {/* drowpdown button */}
          <div className='hidden md:block'>
            <div className='group inline-block relative'>
              <button className='text-slate-300  hover:text-black font-semibold rounded-full py-1 px-2 hover:bg-slate-300 ml-2 inline-flex items-center'>
                <span className='mr-1  '>Dropdown</span>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </button>
              <ul className='absolute hidden  text-gray-700 pt-1 group-hover:block'>
                <li className='mt-2 '>
                  <a
                    className='hover:text-black
                    text-slate-300 rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                    href='#'
                  >
                    One
                  </a>
                </li>
                <li className=''>
                  <a
                    className='hover:text-black
                    text-slate-300 bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                    href='#'
                  >
                    Two
                  </a>
                </li>
                <li className=''>
                  <a
                    className='hover:text-black
                    text-slate-300 rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                    href='#'
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a className='hover:text-black hidden md:block text-slate-300 ml-2text-slate-200  rounded-full py-1 px-2 hover:bg-slate-300 '>
            Saftey
          </a>
          <a className='hover:text-black hidden md:block text-slate-300 ml-2text-slate-200  rounded-full py-1 px-2 hover:bg-slate-300'>
            Help
          </a>
        </div>
        <div className='flex items-center'>
          <button className='text-slate-300 hidden hover:text-black md:flex items-center rounded-full py-1 px-2 hover:bg-slate-300 ml-2 '>
            <GiInterdiction className='mr-2' />
            english
          </button>
          <button className='text-slate-300 hidden  hover:text-black md:flex items-center rounded-full py-1 px-2 hover:bg-slate-300 ml-2'>
            <CiTextAlignJustify className='mr-2' />
            products
          </button>
          <button className='text-slate-300 hidden lg:block hover:text-black  rounded-full py-1 px-2 hover:bg-slate-300 ml-2'>
            login
          </button>
          <button className='text-slate-300 hover:text-black rounded-full py-1 px-2 hover:bg-slate-300 ml-2'>
            signup
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
