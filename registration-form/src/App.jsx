import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function App() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First Name must be at least 3 characters")
      .required("First Name is Required"),
    email: Yup.string()
      .matches(emailRegex, "Provide a valid email address")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        passRegex,
        "Password must have 1 digit, special character, lower & upper case letter"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    role: Yup.string().required("Role is Required"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    const result = JSON.stringify(data);
    console.log(result);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
  };

  return (
    <div className="flex flex-[1] h-screen justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("firstName")}
              type="text"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
            {errors.firstName && (
              <p className="absolute text-[red] text-xs bottom-1">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">Last Name</label>
            <input
              placeholder="Last Name"
              {...register("lastName")}
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
              {...register("email")}
              type="email"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
            {errors.email && (
              <p className="absolute text-[red] text-xs bottom-1">
                {errors.email?.message}
              </p>
            )}
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
              {...register("password")}
              type="password"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
            {errors.password && (
              <p className="absolute text-[red] text-xs bottom-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">
              Confirm Password{" "}
              <sup className="text-[red] text-[95%] leading-[0] relative align-baseline -top-0.5">
                *
              </sup>
            </label>
            <input
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              type="password"
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            />
            {errors.confirmPassword && (
              <p className="absolute text-[red] text-xs bottom-1">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col pb-6">
            <label className="text-sm mb-2">
              Role{" "}
              <sup className="text-[red] text-[95%] leading-[0] relative align-baseline -top-0.5">
                *
              </sup>
            </label>
            <select
              {...register("role")}
              className="rounded border h-8 px-2 py-0 border-solid border-[#ccc]"
            >
              <option value="">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
            {errors.role && (
              <p className="absolute text-[red] text-xs bottom-1">
                {errors.role?.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="w-60 rounded border bg-[darkblue] text-[white] uppercase text-sm font-[bold] cursor-pointer p-3 border-solid border-[#ccc] disabled:border disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed disabled:border-solid disabled:border-[#999999]"
          >
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
