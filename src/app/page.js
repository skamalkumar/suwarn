"use client";

import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <main className="h-screen bg-black text-white overflow-auto flex items-center justify-center">
      <div className="w-full max-w-7xl py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2">
              <img src="/images/triplessss-suwarn2.png" alt="logo" className="h-40 w-auto" />
            </div>
            <h1 className="text-2xl font-semibold">Global Consultant</h1>
            <p className="text-sm mt-4 text-gray-300">
              Empowering individuals and businesses to achieve financial success through expert planning, smart investing, and personalized strategies.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-lime-400 font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/financial-planning">
                  <span className="hover:text-lime-300 transition cursor-pointer">Financial Planning</span>
                </Link>
              </li>
              <li>
                <Link href="/investment-management">
                  <span className="hover:text-lime-300 transition cursor-pointer">Investment Management</span>
                </Link>
              </li>
              <li>
                <Link href="/retirement-planning">
                  <span className="hover:text-lime-300 transition cursor-pointer">Retirement Planning</span>
                </Link>
              </li>
              <li>
                <Link href="/investment-analysis">
                  <span className="hover:text-lime-300 transition cursor-pointer">Investment Analysis</span>
                </Link>
              </li>
              <li>
                <Link href="/insurance-planning">
                  <span className="text-lime-300 hover:underline transition cursor-pointer">Insurance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-lime-400 font-semibold mb-4">Explore</h2>
            <ul className="space-y-2 text-sm">
            <Link href="/about"> <li>About</li></Link>
              <li>Services</li>
              <li>FAQs</li>
              <li>Partner</li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h2 className="text-lime-400 font-semibold mb-4">Let's Talk!</h2>
            <p className="text-sm text-gray-300 mb-4">
              Whether you're planning for tomorrow or building today, we're just one message away.
            </p>
            <button className="bg-lime-400 text-black px-4 py-2 font-semibold hover:bg-lime-500 transition">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-10 gap-4 text-sm text-white">
            <div className="flex items-center space-x-2">
              <FiPhone className="text-xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">+91-7418729305</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">ssssglobalconsultants@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
