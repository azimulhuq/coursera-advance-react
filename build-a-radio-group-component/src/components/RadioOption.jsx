// eslint-disable-next-line react/prop-types
const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="cursor-pointer mb-2">
      <input
        className="cursor-pointer mr-2"
        id={value}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        type="radio"
        name={value}
      />
      <label className="cursor-pointer" htmlFor={value}>
        {children}
      </label>
    </div>
  );
};

export default RadioOption;
