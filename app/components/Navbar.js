'use client';
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">YUKTA</div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 focus:outline-none hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
            placeholder="Search products..."
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-emerald-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            Home
          </li>
          <li className="hover:text-emerald-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            Shop
          </li>
          <li className="hover:text-emerald-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            Doctor Appointment
          </li>
          <li className="hover:text-emerald-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Menu using Dialog from Headless UI */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300" />

        <DialogPanel
          className={`fixed inset-0 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold cursor-pointer">Menu</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 focus:outline-none hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4">
            <input
              type="text"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
              placeholder="Search products..."
            />
          </div>

          <ul className="mt-4 space-y-4">
            <li className="hover:text-emerald-700 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              Home
            </li>
            <li className="hover:text-emerald-700 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              Shop
            </li>
            <li className="hover:text-emerald-700 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              Doctor Appointment
            </li>
            <li className="hover:text-emerald-700 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              Contact
            </li>
          </ul>
        </DialogPanel>
      </Dialog>
    </nav>
  );
};

export default Navbar;
