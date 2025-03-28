import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import "./App.css";

const App = () => {
	return (
		<div className="crt-lines">
			<img src="src\assets\concept_app.jpg" className="reference-image"></img>
			<Header />
			<Nav />
		</div>
	);
};

export default App;
