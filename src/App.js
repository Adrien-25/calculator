import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="app">
      <Calculator />
      <a
        href="https://github.com/Adrien-25/calculator.git"
        id="github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </div>
  );
}

export default App;
