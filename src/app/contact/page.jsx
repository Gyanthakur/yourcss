const ContactPage = () => {
	return (
		<div className="mt-10">
			<form className="bg-zinc-500 flex flex-col justify-start p-4 rounded-lg">
				<label htmlFor="firstName" className="text-white mb-2">
					First Name:
				</label>
				<input
					className="bg-white rounded-md py-2 px-3 mb-2"
					type="text"
					id="firstName"
					name="firstName"
					placeholder="Enter your first name"
				/>

				<label htmlFor="lastName" className="text-white mb-2">
					Last Name:
				</label>
				<input
					className="bg-white rounded-md py-2 px-3 mb-2"
					type="text"
					id="lastName"
					name="lastName"
					placeholder="Enter your last name"
				/>

				<label htmlFor="phone" className="text-white mb-2">
					Phone No:
				</label>
				<input
					className="bg-white rounded-md py-2 px-3 mb-2"
					type="number"
					id="phone"
					name="phone"
					placeholder="Enter your phone number"
				/>

				<label htmlFor="email" className="text-white mb-2">
					Email:
				</label>
				<input
					className="bg-white rounded-md py-2 px-3 mb-2"
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email address"
				/>

				<label htmlfor="textArea" className="text-white mb-2">
					Write your message or query here:
				</label>
				<textarea
					className="bg-white rounded-md py-2 px-3 mb-2"
					id="textArea"
					name="textArea"
					placeholder="Enter your message here"
					rows="4"
					cols="50"
				></textarea>

				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Send Feedback
				</button>
			</form>
		</div>
	);
};
export default ContactPage;
