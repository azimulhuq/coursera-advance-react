import Title from "./Title";
import Switch from "./Switch/Switch";

const Header = () => {
  return (
    <header className="relative flex flex-row justify-center items-center my-6">
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

export default Header;
