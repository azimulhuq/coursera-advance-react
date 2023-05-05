import { ThemeProvider, useTheme } from "./ThemeContext";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col min-h-screen p-4 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
