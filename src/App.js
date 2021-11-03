import "./App.css";
import CalculationInfo from "./components/CalculationInfo";
import CardDetails from "./components/CardDetails";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main className="general-body-width">
				<CardDetails />
				<CalculationInfo />
			</main>
		</div>
	);
}

export default App;
