"use client";

import React, { useState } from "react";
import style from "./cssentity.module.css";
import { Copy } from "phosphor-react";

// Modal component to display both HTML and CSS code with copy functionality
const CodeModal = ({ htmlCode, cssCode, onClose, onCopyHtml, onCopyCss }) => {
	return (
		// <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto z-50">
		// 	<div className="bg-white p-6 rounded-lg w-2/3 relative">
		// 		<h2 className="text-xl mb-4">Code Viewer:</h2>

		// 		{/* Display HTML Code */}
		// 		<h3 className="text-lg mb-2">HTML Code:</h3>
		// 		<pre className="bg-gray-100 p-4 rounded overflow-auto max-h-64 mb-4">
		// 			{htmlCode}
		// 		</pre>

		// 		{/* Display CSS Code */}
		// 		<h3 className="text-lg mb-2">CSS Code:</h3>
		// 		<pre className="bg-gray-100 p-4 rounded overflow-auto max-h-64">
		// 			{cssCode}
		// 		</pre>

		// 		{/* Copy and Close Buttons */}
		// 		<div className="mt-4 flex justify-between">
		// 			<button
		// 				className="bg-blue-500 text-white px-4 py-2 rounded"
		// 				onClick={onCopyHtml}
		// 			>
		// 				Copy HTML Code
		// 			</button>
		// 			<button
		// 				className="bg-blue-500 text-white px-4 py-2 rounded"
		// 				onClick={onCopyCss}
		// 			>
		// 				Copy CSS Code
		// 			</button>
		// 			<button
		// 				className="bg-red-500 text-white px-4 py-2 rounded"
		// 				onClick={onClose}
		// 			>
		// 				Close
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>

		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg w-2/3 relative flex flex-col h-3/4">
				<h2 className="text-xl mb-4">Code Viewer:</h2>

				<div className="flex-1 overflow-y-auto custom-scrollbar">
					{/* Display HTML Code */}
					<div className="relative">
						<h3 className="text-lg mb-2 font-bold">HTML Code:</h3>
						<button
							className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700"
							onClick={onCopyHtml}
						>
							<Copy size={25} />
						</button>
						<pre className="bg-gray-100 p-4 rounded overflow-auto mb-4">
							{htmlCode}
						</pre>
					</div>

					{/* Display CSS Code */}
					<div className="relative">
						<h3 className="text-lg mb-2 font-bold">CSS Code:</h3>
						<button
							className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700"
							onClick={onCopyCss}
						>
							<Copy size={25} />
						</button>
						<pre className="bg-gray-100 p-4 rounded overflow-auto">
							{cssCode}
						</pre>
					</div>
				</div>

				{/* Copy and Close Buttons */}
				<div className="mt-4 flex justify-between">
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
						onClick={onCopyHtml}
					>
						Copy HTML Code
					</button>
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
						onClick={onCopyCss}
					>
						Copy CSS Code
					</button>
					<button
						className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 "
						onClick={onClose}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

const CssEntity = () => {
	const [showCodeModal, setShowCodeModal] = useState(false);
	const [htmlCodeToShow, setHtmlCodeToShow] = useState("");
	const [cssCodeToShow, setCssCodeToShow] = useState("");

	// Function to fetch both CSS and HTML file content and open the modal
	const handleViewCodeClick = async (htmlFileName, cssFileName) => {
		try {
			const [htmlResponse, cssResponse] = await Promise.all([
				fetch(`/htmlCode/${htmlFileName}`),
				fetch(`/cssCode/${cssFileName}`),
			]);
			const htmlCode = await htmlResponse.text();
			const cssCode = await cssResponse.text();
			setHtmlCodeToShow(htmlCode);
			setCssCodeToShow(cssCode);
			setShowCodeModal(true);
		} catch (error) {
			console.error("Error fetching files:", error);
		}
	};

	// Function to copy HTML code to clipboard
	const handleCopyHtmlToClipboard = () => {
		navigator.clipboard.writeText(htmlCodeToShow).then(() => {
			alert("HTML Code copied to clipboard!");
		});
	};

	// Function to copy CSS code to clipboard
	const handleCopyCssToClipboard = () => {
		navigator.clipboard.writeText(cssCodeToShow).then(() => {
			alert("CSS Code copied to clipboard!");
		});
	};

	return (
		// <div className="grid grid-cols-5 gap-4">
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
			{/* Display modal with both HTML and CSS code when showCodeModal is true */}
			{showCodeModal && (
				<CodeModal
					htmlCode={htmlCodeToShow}
					cssCode={cssCodeToShow}
					onClose={() => setShowCodeModal(false)}
					onCopyHtml={handleCopyHtmlToClipboard}
					onCopyCss={handleCopyCssToClipboard}
				/>
			)}

			{/* Example Component for Bubble Left to Right */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<button className={style.bubbleLeftToRight}>Bubble -&gt;</button>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick(
							"bubbleLeftToRight.html",
							"bubbleLeftToRight.css"
						)
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* Example Component for Bubble Right to Left */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<button className={style.bubbleRightToLeft}>Bubble &lt;-</button>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick(
							"bubbleRightToLeft.html",
							"bubbleRightToLeft.css"
						)
					}
				>
					<Copy size={25} />
				</div>
				
			</div>
			{/* Example Component for Bubble Right to Left */}

			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<button className={style.bubbleUpToDown}>Bubble &darr;</button>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick("bubbleUpToDown.html", "bubbleUpToDown.css")
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}

			{/* Add more components with both HTML and CSS buttons as needed */}

			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group ">
				<div className={style.wave}>
					<div>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("wave.html", "wave.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<div class={style.balls}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick("balls.html", "balls.css")
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<div class={style.fillRact}>
					<div></div>
					
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick("fillRact.html", "fillRact.css")
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
		</div>
	);
};

export default CssEntity;
