import { useState, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const navLinksRef = useRef([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.from(navLinksRef.current, {
        x: -200,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(drawerRef.current, {
        x: '-100%',
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  return (
    <>
      <nav className='flex items-center justify-center font-medium bg-[#6a28aa] text-white p-4'>
        <div className='flex items-center justify-between w-3/4'>
        <h1 className='text-xl'>Slider</h1>
        <button
          className='hamburger text-3xl cursor-pointer rounded-full px-2 pb-[6px] border border-white'
          onClick={toggleMenu}
        >
          &#9776; 
        </button>
        </div>
        
      </nav>
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#6a28aa] z-50 transform -translate-x-full`}
      >
        <div className='flex flex-col justify-center h-full space-y-6 text-center'>
          <li ref={(el) => (navLinksRef.current[0] = el)} className='text-white text-xl'>
            <a href="/">Home</a>
          </li>
          <li ref={(el) => (navLinksRef.current[1] = el)} className='text-white text-xl'>
            <a href="/about">About</a>
          </li>
          <li ref={(el) => (navLinksRef.current[2] = el)} className='text-white text-xl'>
            <a href="/contact">Contact</a>
          </li>
        </div>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-40'
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
