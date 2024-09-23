import CssEntity from "@/components/cssentity";
import { LampDemo } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
	return (
		<div className="">
			<div className=" mt-16 ">
			<LampDemo />
				<h1 className=" flex justify-center items-center pl-6 pr-6 text-5xl mt-3 font-bold">
					Beautifully simple click-to-copy CSS effects
			<Meteors number={20} />
				</h1>
				<p className="mt-6 flex items-center justify-center pl-20 pr-20 m-auto  text-1xl font-bold">
					A carefully crafted collection designed with a focus on fluidity,
					simplicity, and ease of use. Powered by CSS with minimal markup.
					Completely open source and MIT licensed.
				</p>
				
				
			</div>

			<CssEntity/>
		</div>
	);
}
