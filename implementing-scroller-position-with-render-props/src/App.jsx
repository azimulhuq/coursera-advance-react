import "./App.css";
import PanelMouseLogger from "./components/PanelMouseLogger";
import PointMouseLogger from "./components/PointMouseLogger";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center text-[calc(10px_+_2vmin)]">
      <header className="m-8">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
