import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className="p-10">
      <h1 className="text-3xl font-bold pb-4">Customer data</h1>
      <h2 className="text-2xl font-bold pb-5">
        Name: {user.results[0].name.first}
      </h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1 className="text-3xl font-bold">Data pending...</h1>
  );
}
