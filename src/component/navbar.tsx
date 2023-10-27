import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  return (
    // <div className=" grid max-w-xl m-auto hover:shadow-2xl md:max-w-full bg-green-700 text-2xl text-white">
    //   <div className="flex items-center justify-between">
    //     <img
    //       className=" m-4 p-2 rounded-3xl h-20 w-20 md:h-30 md:w-30"
    //       src="https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png"
    //       alt=""
    //     />
    //     <div className="text-white">
    //     <Link className="bg-sky-500 p-2 rounded-md m-1" href="/login">Login</Link>
    //     <Link className="bg-pink-400 p-2 rounded-md m-1" href="/signup">Signup</Link>

    //     </div>
    //   </div>
    // </div>

    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between py-3 bg-green-950 bg-opacity-40">
      <div className="flex flex-wrap items-center justify-between w-full mx-4 md:mx-20">
        <div>
        <img
          className=" m-4 p-1 rounded h-20 w-28 md:h-30 md:w-30"
          src="https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png"
          alt=""
        />
        </div>
      </div>
    </nav>
  );
};
