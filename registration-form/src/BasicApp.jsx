import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="absolute text-[red] text-xs bottom-1">
      Password should have at least 8 characters
    </p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="flex flex-[1] h-screen justify-center items-center">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex w-[480px] border rounded flex-col p-4 border-solid border-[#ccc]">
          <h2>Sign Up</h2>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">
              First Name{" "}
              <sup className="text-[red] text-[95%] leading-[0] relative align-baseline -top-0.5">
                *
              </sup>
            </label>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
          </div>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">Last Name</label>
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
          </div>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">
              Email Address{" "}
              <sup className="text-[red] text-[95%] leading-[0] relative align-baseline -top-0.5">
                *
              </sup>
            </label>
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
          </div>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">
              Password{" "}
              <sup className="text-[red] text-[95%] leading-[0] relative align-baseline -top-0.5">
                *
              </sup>
            </label>
            <input
              placeholder="Password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onBlur={() => setPassword({ ...password, isTouched: true })}
              type="password"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">
              Role{" "}
              <sup className="text-[red] text-[95%] leading-[0] relative align-baseline -top-0.5">
                *
              </sup>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-60 rounded border bg-[darkblue] text-[white] uppercase text-sm font-[bold] cursor-pointer p-3 border-solid border-[#ccc] disabled:border disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed disabled:border-solid disabled:border-[#999999]"
            disabled={!getIsFormValid()}
          >
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
