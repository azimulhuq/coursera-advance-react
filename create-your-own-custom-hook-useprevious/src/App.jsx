import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const getNextDay = () => {
    switch (day) {
      case "Monday":
        setDay("Tuesday");
        break;
      case "Tuesday":
        setDay("Wednesday");
        break;
      case "Wednesday":
        setDay("Thursday");
        break;
      case "Thursday":
        setDay("Friday");
        break;
      case "Friday":
        setDay("Monday");
        break;
      default:
        console.log(`Hooray, Lets enjoy the weekand!`);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold py-3">
        Today is: {day} <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button
        className="bg-stone-100 border-solid border border-black px-1.5 py-0.5 mt-1 hover:bg-gray-200"
        onClick={getNextDay}
      >
        Get next day
      </button>
    </div>
  );
}

const usePrevious = (val) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
};
