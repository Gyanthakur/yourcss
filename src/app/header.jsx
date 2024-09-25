

"use client"

import React, { useState } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			{/* Fixed Header */}
			<header className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-lg z-50 border-b border-blue-300">
				<nav className="flex justify-between items-center px-6 py-4">
					{/* Logo */}
					<a href="/" className="text-3xl font-bold">
						Logo
					</a>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-8 text-lg">
						<a href="/" className="hover:text-yellow-400 transition">Home</a>
						<a href="/about" className="hover:text-yellow-400 transition">About</a>
						<a href="/services" className="hover:text-yellow-400 transition">Services</a>
						<a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
					</div>

					{/* Mobile Menu Toggle */}
					<div className="md:hidden">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-2xl focus:outline-none"
						>
							{menuOpen ? '✕' : '☰'}
						</button>
					</div>
				</nav>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="md:hidden flex flex-col items-center bg-blue-800 py-4 space-y-4">
						<a href="/" className="hover:text-yellow-400 transition">Home</a>
						<a href="/about" className="hover:text-yellow-400 transition">About</a>
						<a href="/services" className="hover:text-yellow-400 transition">Services</a>
						<a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
					</div>
				)}
			</header>

			{/* Push content down to prevent it from being overlapped by the header */}
			<div className="mt-20"></div>

			{/* Rest of your page content */}
			{/* <div className="p-6">
				<h1>Welcome to My Website</h1>
				<p>Here is some content...</p>
			</div> */}
		</>
	);
};

export default Header;
