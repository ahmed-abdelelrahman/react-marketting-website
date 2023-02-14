import React, { useState } from "react";
import { Link } from "react-router-dom";
// react-icons
import { GiNetworkBars } from "react-icons/gi";
import { SiJusteat } from "react-icons/si";
import { AiFillCar, AiOutlineSearch } from "react-icons/ai";

const text = [
  {
    id: 0,
    h2: (
      <h2 className='leading-10 px-4 text-5xl font-medium pb-5'>
        Get in the driver’s <br></br> seat and get paid
      </h2>
    ),
    p: (
      <p className='pb-2 px-4'>
        Drive on the platform with the largest network of active riders.
      </p>
    ),
    div: (
      <div className='px-4'>
        <button
          id='signInDiv'
          className='bg-black rounded-lg px-4 py-2 text-white text-lg pb-2'
        >
          <Link to='/authentication'>Sign up for drive</Link>
        </button>
        <br></br>
        <a className='border-b-2 pb-1'>
          Learn more about driving and delivering
        </a>
      </div>
    ),
  },
  {
    id: 1,
    h2: (
      <h2 className='leading-10 text-5xl font-medium pb-5 px-4'>
        Discover delicious<br></br> eats
      </h2>
    ),
    p: <p className='pb-2 px-4'>Order delivery from restaurants you love</p>,
    div: (
      <div className='flex px-4 '>
        <button className='bg-black rounded-lg px-4 py-2 text-white text-lg pb-2 mr-4'>
          Order now
        </button>

        <a className='border-b-2 pb-1'>
          Own a restaurant? Partner with Uber Eats
        </a>
      </div>
    ),
  },
  {
    id: 2,
    h2: (
      <h2 className='leading-10 text-5xl font-medium pb-1 mb-5 px-4'>
        Request a ride now
      </h2>
    ),
    p: (
      <form className='grid px-4 mb-5'>
        <input
          className='landing-input relative bg-slate-300 mb-4 p-2 rounded-sm '
          type='text'
          placeholder='Enter pickup location'
        />

        <div>
          <input
            className='landing-input  relative bg-slate-300 mb-4 p-2 rounded-sm'
            type='text'
            placeholder='Enter pickup location'
          />
        </div>
      </form>
    ),
    div: (
      <div className='px-4'>
        <button className='bg-black rounded-lg px-4 py-2 text-white text-lg pb-2 mr-4'>
          Request Now{" "}
        </button>
        <button className='bg-slate-200 text-black rounded-lg px-4 py-2  text-lg pb-2 mr-4'>
          Schedule for later
        </button>
      </div>
    ),
  },
];
const Landing = () => {
  // functions to slide content

  const [index, setIndex] = useState(0);

  const p = text[index].p;
  const h2 = text[index].h2;
  const div = text[index].div;

  return (
    <div
      className='relative h-[calc(100vh-90px)] bg-no-repeat bg-cover lg:pl-36  lg:py-20 bg-black '
      style={{
        backgroundImage: `url(/images/img${index}.jpg)`,
      }}
    >
      <div className='overlay absolute left-0 top-0 w-full h-full bg-black opacity-60'></div>
      <div className='grid grid-rows-3  Landing-content absolute lg:w-1/2 lg:h-3/4  lg:p-5 w-full h-full p-5  bg-white text-black  '>
        <div className='Landing-offers flex justify-around border-b-2    row-span-1 '>
          <button
            onClick={() => setIndex(0)}
            className=' grid  leading-8 p-2 text-2xl  text-center'
          >
            <GiNetworkBars />
            Drive or <br></br> deliver
          </button>
          <button
            onClick={() => setIndex(1)}
            className=' grid  leading-8  p-2 text-2xl'
          >
            <SiJusteat />
            Eat
          </button>
          <button
            onClick={() => setIndex(2)}
            className=' grid  leading-8   p-2 text-2xl'
          >
            <AiFillCar className='' />
            Ride
          </button>
        </div>

        <div className='drive-text text-left pt-4  row-span-2 leading-9'>
          {h2}
          {p}
          {div}
        </div>
      </div>
    </div>
  );
};
export default Landing;
