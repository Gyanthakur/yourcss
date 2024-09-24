import CssEntity from "@/components/cssentity";
import { LampDemo } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
	return (
		<>
			<div className="">
				<LampDemo />
				<h1 className=" flex justify-center items-center pl-6 pr-6 text-5xl mt-3 font-bold">
					Beautifully simple click-to-copy CSS effects
				</h1>

				<p className="mt-6 flex items-center justify-center pl-20 pr-20 m-auto text-1xl font-bold">
					Explore a variety of stunning CSS effects that you can easily copy and
					use in your projects. Simply click the button, and the code is
					instantly copied to your clipboard. No hassle, just beautiful design.
				</p>
			</div>

			<CssEntity />
			<Meteors number={20} />
		</>
	);
}
