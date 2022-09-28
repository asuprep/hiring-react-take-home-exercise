import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const { UNNECESSARY_SECRET } = process.env;

var hitBackend = () => {
	axios.get("/test").then((response) => {
		console.log(response.data);
	});
};

function App() {
	const [count, setCount] = useState(0);
	console.log(`secret: ${UNNECESSARY_SECRET}`);

	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
	});

	return (
		<div className="App">
			<header className="App-header">
				<img
					src="/logo_large.png"
					alt="large logo"
					height="50"
					width="50"
					style={{ border: "dashed red" }}
				/>
				<p>ASU Take-home exercise</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				></a>
				<p>You sent the backend {count} requests</p>
				<button onClick={function(event){ hitBackend(); setCount(count + 1)}}>
					Send a request to the backend
				</button>
			</header>
		</div>
	);
}

export default App;
