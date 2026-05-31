"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">
          Socialearn
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#">Home</Link>
          <Link href="#">Feature</Link>
          <Link href="#">Community</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
        className = "md:hidden text-2xl"
        onClick = { () => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>
      {/*Main Menu*/}
      {isMenuOpen && (
        <div className="flex flex-col gap-6 px-6 pb-6 md:hidden">

          <a href="#" className="hover:text-pink-400">
            Home
          </a>

          <a href="#" className="hover:text-pink-400">
            Features
          </a>

          <a href="#" className="hover:text-pink-400">
            community
          </a>

          <a href="/login" className="hover:text-pink-400">
            Login
          </a>

        </div>
       )}
    </>
    );
}