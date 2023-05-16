import "./App.css";
import { useState } from "react";
import RadioGroup from "./components/RadioGroup";
import RadioOption from "./components/RadioOption";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-1 h-screen flex-col p-4">
      <h2 className="text-2xl font-bold mb-2">
        How did you hear about Little Lemon?
      </h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button
        className="w-[150px] h-8 rounded bg-[darkblue] text-[white] mt-4 border-[none] disabled:bg-[#cccccc] disabled:text-[#666666]"
        disabled={!selected}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
