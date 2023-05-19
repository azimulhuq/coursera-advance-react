import { useState } from "react";

// eslint-disable-next-line react/prop-types
function FeedbackForm({ onSubmit }) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
  };

  return (
    <div className="w-[400px] p-4">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col">
          <h2 className="text-2xl font-bold mt-4 mb-4">Feedback form</h2>
          <div className="flex flex-col pb-4">
            <label className="mr-2 mb-4" htmlFor="score">
              Score: {score} ⭐
            </label>
            <input
              id="score"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
              type="range"
              min="0"
              max="10"
            />
          </div>
          <div className="flex flex-col pb-4">
            <label className="mr-2 mb-4" htmlFor="comment">
              Comments:
            </label>
            <textarea
              className="h-[100px] rounded border-2"
              id="comment"
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <button
            className="w-[150px] h-8 rounded bg-[darkblue] text-[white] mt-4 border-[none] disabled:bg-[#cccccc] disabled:text-[#666666]"
            type="submit"
            disabled={isDisabled}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FeedbackForm;
