import React from "react";
import logo from "./assets/images/logo.png";
function App() {
	return (
		<div className="flex justify-center h-screen xl:max-w-4xl items-center xl:mx-auto">
			<div className="rounded-lg shadow-short bg-gradient-to-b from-yellow-500 to-guardsman-red-300 xl:h-4/6 xl:w-1/2 flex flex-col items-center py-8 px-4 xl:p-10">
				<img src={logo} alt="admin-logo" className="w-3/12 xl:w-4/12" />
				<div className="text-2xl font-bold text-white">Admin</div>
				<div className="w-full grid grid-cols-1 gap-4 mt-8">
					<label className="block">
						<span className="text-white">Username</span>
						<input
							type="text"
							className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="Username"
						/>
					</label>
					<label className="block">
						<span className="text-white">Password</span>
						<input
							type="password"
							className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="Password"
						/>
					</label>
					<label className="block mt-8">
						<button className="bg-gray-900 text-white transition duration-300 w-full rounded-md p-2 hover:bg-guardsman-red-700">
							Login
						</button>
					</label>
				</div>
			</div>
		</div>
	);
}

export default App;
