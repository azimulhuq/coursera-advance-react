import { useState } from "react";
import "./App.css";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  const spendGiftCard = () => {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      };
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Gift Card Page</h1>
      <h2 className="text-2xl font-bold my-2">
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3 className="text-xl font-bold my-1">{giftCard.text}</h3>
      <p className="my-2">{giftCard.instructions}</p>
      {giftCard.valid && (
        <button
          className="bg-stone-100 border-solid border border-black px-1.5 py-0.5 mt-1 hover:bg-gray-200"
          onClick={spendGiftCard}
        >
          Spend Gift Card
        </button>
      )}
    </div>
  );
}
