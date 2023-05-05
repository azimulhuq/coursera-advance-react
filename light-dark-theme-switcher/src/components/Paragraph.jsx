import { useTheme } from "../ThemeContext";

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p className={`mt-5 ${theme === "light" ? "text-black" : "text-white"}`}>
      {children}
    </p>
  );
};

export default Paragraph;
