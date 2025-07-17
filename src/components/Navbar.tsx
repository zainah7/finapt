"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-16 md:py-12 bg-[#F7F7F7] relative">
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/icons/logo.svg"
          alt="Finapt Logo"
          width={24}
          height={24}
        />
        <span className="text-xl font-semibold text-[#000000]">Finapt</span>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#000000] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex">
        <Button asChild className="bg-[#0066DA] hover:bg-[#0080DA] rounded-3xl px-2 py-5">
          <Link href="#" className="flex items-center">
            Get started for free
            <Image
              src="/assets/icons/arrow-up-right.svg"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
          </Link>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F7F7F7] shadow-md py-4 px-4 z-10">
          <Button asChild className="bg-[#0066DA] hover:bg-[#0080DA] rounded-3xl px-4 py-2 w-full">
            <Link href="#" className="flex items-center justify-center">
              Get started for free
              <Image
                src="/assets/icons/arrow-up-right.svg"
                alt="Arrow Icon"
                width={16}
                height={16}
                className="ml-1"
              />
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
