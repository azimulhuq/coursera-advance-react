import FeedbackForm from "./components/FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="w-[400px] p-4">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
