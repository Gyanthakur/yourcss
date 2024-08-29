import CssEntity from "@/components/cssentity";

export default function Home() {
	return (
		<div className="">
			<div className="mt-20 ">
				<h1 className=" flex justify-center items-center pl-6 pr-6 text-white text-5xl mt-3 font-bold">
					Beautifully simple click-to-copy CSS effects
				</h1>
				<p className="mt-6 flex items-center justify-center pl-20 pr-20 m-auto  text-1xl font-bold text-white">
					A carefully crafted collection designed with a focus on fluidity,
					simplicity, and ease of use. Powered by CSS with minimal markup.
					Completely open source and MIT licensed.
				</p>
			</div>

			<CssEntity />
		</div>
	);
}
