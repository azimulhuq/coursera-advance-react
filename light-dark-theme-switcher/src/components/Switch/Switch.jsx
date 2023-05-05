import "./Switch.css";
import { useTheme } from "../../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
