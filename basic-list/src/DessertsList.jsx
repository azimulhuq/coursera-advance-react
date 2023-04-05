import React from "react";

const DessertsList = ({ data }) => {
  return (
    <ul className="p-4 list-disc list-inside">
      {data
        .filter((desserts) => desserts.calories < 500)
        .sort((a, b) => a.calories - b.calories)
        .map((dessert) => (
          <li>
            {dessert.name} - {dessert.calories} cal
          </li>
        ))}
    </ul>
  );
};

export default DessertsList;
