import { MiddleBar, Navbar, TopBar } from "./components/components";

function App() {
	return (
		<>
			<TopBar />
			<MiddleBar />

			<div className="container">
				<Navbar />
			</div>
		</>
	);
}

export default App;
