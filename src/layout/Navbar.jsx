import React from "react";
import  Link  from "next/link"
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <h1 className="flex-1">Moon Tech</h1>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/top-rated">
            <a>Top Rated</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
          <Link href="/">
            <a>
              <IoIosListBox className="text-white" />
            </a>
          </Link>
        </li>
        <li title="cart" className="bg-indigo-500 p-2 rounded-full">
          <Link href="/cart">
            <a>
              <BsFillCartFill className="text-white " />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
