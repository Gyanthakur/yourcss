// "use client";

// import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
// import React, { useState } from "react";
// import Image from "next/image";

// const Header = () => {
// 	const [menuOpen, setMenuOpen] = useState(false);

// 	return (
// 		<>
// 			<header className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-lg z-50 border-b border-blue-300">
// 				<nav className="flex justify-between items-center px-6 py-4">
// 				<a href="/" className="flex items-center">
//             {/* Logo */}
//             <Image 
//                 src="/logo.png" 
//                 alt="logo img" 
//                 width={80}   
//                 height={50}   
//                 className="border-2 border-white rounded-lg shadow-xl"   
//             />
//         </a>

// 					{/*for  Desktop Menu */}

// 					<div className="hidden md:flex space-x-8 text-lg">
// 						<SignedOut>
// 							<SignInButton />
// 						</SignedOut>
// 						<SignedIn>
// 							<UserButton />
// 							<a href="/" className="hover:text-yellow-400 transition">
// 								Home
// 							</a>
// 							<a href="/about" className="hover:text-yellow-400 transition">
// 								About
// 							</a>
// 							<a href="/services" className="hover:text-yellow-400 transition">
// 								Services
// 							</a>
// 							<a href="/contact" className="hover:text-yellow-400 transition">
// 								Contact
// 							</a>
// 						</SignedIn>
// 					</div>

// 					{/* for Mobile */}
// 					<div className="md:hidden">
// 						<button
// 							onClick={() => setMenuOpen(!menuOpen)}
// 							className="text-2xl focus:outline-none"
// 						>
// 							{menuOpen ? "✕" : "☰"}
// 						</button>
// 					</div>
// 				</nav>

// 				{/* for Mobile Menu */}
// 				{menuOpen && (
// 					<div className="md:hidden flex flex-col items-center bg-blue-800 py-4 space-y-4">
// 						<SignedOut>
// 							<SignInButton />
// 						</SignedOut>
// 						<SignedIn>
// 							<UserButton />
// 							<a href="/" className="hover:text-yellow-400 transition">
// 								Home
// 							</a>
// 							<a href="/about" className="hover:text-yellow-400 transition">
// 								About
// 							</a>
// 							<a href="/services" className="hover:text-yellow-400 transition">
// 								Services
// 							</a>
// 							<a href="/contact" className="hover:text-yellow-400 transition">
// 								Contact
// 							</a>
// 						</SignedIn>
// 					</div>
// 				)}
// 			</header>

// 			{/* <div className="mt-16"></div> */}
// 		</>
// 	);
// };

// export default Header;



"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-lg z-50 border-b border-blue-300">
				<nav className="flex justify-between items-center px-4 py-3"> {/* Reduced padding */}
					<a href="/" className="flex items-center">
						{/* Logo */}
						<Image 
							src="/logo.png" 
							alt="Website logo" 
							width={60}   
							height={40}   
							className="border-2 border-black hover:border-white rounded-lg shadow-xl hover:bg-black"   
						/>
					</a>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-8 text-lg">
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
							<a href="/" className="hover:text-yellow-400 transition">
								Home
							</a>
							<a href="/about" className="hover:text-yellow-400 transition">
								About
							</a>
							<a href="/services" className="hover:text-yellow-400 transition">
								Services
							</a>
							<a href="/contact" className="hover:text-yellow-400 transition">
								Contact
							</a>
						</SignedIn>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-2xl focus:outline-none"
							aria-label="Toggle menu"
						>
							{menuOpen ? "✕" : "☰"}
						</button>
					</div>
				</nav>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="md:hidden flex flex-col items-center bg-blue-800 py-4 space-y-4">
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
							<a href="/" className="hover:text-yellow-400 transition">
								Home
							</a>
							<a href="/about" className="hover:text-yellow-400 transition">
								About
							</a>
							<a href="/services" className="hover:text-yellow-400 transition">
								Services
							</a>
							<a href="/contact" className="hover:text-yellow-400 transition">
								Contact
							</a>
						</SignedIn>
					</div>
				)}
			</header>
		</>
	);
};

export default Header;
