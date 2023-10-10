import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  return (
    <div className="bg-black text-2xl text-white">
      <div className="flex items-center justify-between">
        <img
          className=" m-4 p-2 rounded-full h-20 w-20 md:h-30 md:w-30"
          src="https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png"
          alt=""
        />
        <div>
        <Link className="bg-slate-400" href="/login">Login</Link>
        <Link href="/signup">Signup</Link>

        </div>
      </div>
    </div>
  );
};
