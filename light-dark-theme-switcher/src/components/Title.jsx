import { useTheme } from "../ThemeContext";

const Title = ({ children }) => {
  const { theme } = useTheme();

  return (
    <h2
      className={`text-2xl font-bold my-1 ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      {children}
    </h2>
  );
};

export default Title;
