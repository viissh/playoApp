"use client"
import { useState } from 'react';

export const Navbar2 = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };



    // function showSideBar() {
    //     let sidemenu = document.getElementById('sidemenu');
    //     sidemenu.style.visibility = "visible";

    // }

    // function closeSideMenu() {
    //     let sidemenu = document.getElementById('sidemenu');
    //     sidemenu.style.visibility = "hidden";
    // }

    return (
        <>
            <div className=' flex justify-between m-1 p-2'>
                <img className='' src="https://ct-domains.s3.amazonaws.com/static/public/Images/logo.png" alt="logo" />
                <img className='hover:' width="40" onClick={toggleSidebar} height="40" src="https://img.icons8.com/sf-black/64/e60000/menu.png" alt="menu" />
            </div>

            {/* ` h-[200vh] -mt-16 ml-auto mr-0 p-4 w-72 bg-sky-950 text-white fixed z-10 transform transition-transform duration-500  ${isOpen ? "translate-x-28" : "translate-x-full"
                } ` */}

            <div id='sidemenu' className={`bg-sky-950 text-white fixed right-0 top-0 h-full w-64 z-10 space-y-20 transition-transform transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div id='closeButton' onClick={toggleSidebar} className="text-lg w-4 m-4">X</div>
                <ul className='m-4 text-xl my-14 space-y-6 md:space-y-0 md:space-x-6 md:flex'>

                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>PARTNER WITH US</li>
                    <li>CONTACT US</li>
                    <li>BLOG</li>
                </ul>
            </div>
        </>
    )
}
