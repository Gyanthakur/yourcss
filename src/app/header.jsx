const Header = () => {
	return (
		<div className="fixed top-0 left-0 w-full bg-indigo-950   text-white shadow-sm z-50 border-b border-white opacity-70">
			<nav className="flex flex-row gap-10 justify-center items-center">
				<a className="flex flex-1 justify-start mt-2 ml-6 text-3xl" href="/">
					Logo
				</a>
				<div className="flex flex-1/2 items-center gap-10 mt-2 mr-5 text-2xl ">
					<a href="/about" className="hover:text-left transform hover:scale-110">About</a>
					<a href="/services" className="hover:text-left transform hover:scale-110">Services</a>
					<a href="/contact" className="hover:text-left transform hover:scale-110 hover:text-red-500">Contact</a>
				</div>
			</nav>
		</div>
	);
};
export default Header;
