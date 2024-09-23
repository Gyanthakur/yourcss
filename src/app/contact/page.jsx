const ContactPage = () => {
	return (
	  <div className="flex justify-center items-center min-h-screen mt-16">
		<form className="bg-zinc-500 flex flex-col justify-start p-6 rounded-lg w-full max-w-lg">
		  <label htmlFor="firstName" className="text-white mb-2">
			First Name:
		  </label>
		  <input
			className="bg-white rounded-md py-2 px-3 mb-4"
			type="text"
			id="firstName"
			name="firstName"
			placeholder="Enter your first name"
		  />
  
		  <label htmlFor="lastName" className="text-white mb-2">
			Last Name:
		  </label>
		  <input
			className="bg-white rounded-md py-2 px-3 mb-4"
			type="text"
			id="lastName"
			name="lastName"
			placeholder="Enter your last name"
		  />
  
		  <label htmlFor="phone" className="text-white mb-2">
			Phone No:
		  </label>
		  <input
			className="bg-white rounded-md py-2 px-3 mb-4"
			type="number"
			id="phone"
			name="phone"
			placeholder="Enter your phone number"
		  />
  
		  <label htmlFor="email" className="text-white mb-2">
			Email:
		  </label>
		  <input
			className="bg-white rounded-md py-2 px-3 mb-4"
			type="email"
			id="email"
			name="email"
			placeholder="Enter your email address"
		  />
  
		  <label htmlFor="textArea" className="text-white mb-2">
			Write your message or query here:
		  </label>
		  <textarea
			className="bg-white rounded-md py-2 px-3 mb-4"
			id="textArea"
			name="textArea"
			placeholder="Enter your message here"
			rows="4"
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
  