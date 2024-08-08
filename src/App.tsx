import { MiddleBar, Navbar, TopBar } from "./components/components";
import Ciw from "./pages/ciw/Ciw";

function App() {
	return (
		<>
			<TopBar />
			<MiddleBar />

			<div className="container">
				<Navbar />
				<Ciw />
			</div>
		</>
	);
}

export default App;
