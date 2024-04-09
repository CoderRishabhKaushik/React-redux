import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setName,
  setPassword,
  clearForm,
} from "../features/service/userSlice";

const Login = () => {
  /// initialize
  const dispatch = useDispatch();

  /// global

  const email = useSelector((state) => state.user.Email);
  const name = useSelector((state) => state.user.Name);
  const password = useSelector((state) => state.user.Password);

  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handleName = (e) => {
    dispatch(setName(e.target.value));
  };
  const handlePass = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    dispatch(clearForm());
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <>
      <div className=" box-border border-2 border-black flex p-[40px] rounded-sm shadow-md shadow-black bg-white">
        <div className="flex flex-col   justify-center items-center">
          <h1 className="mb-10">Login Here</h1>
          <form
            className="flex flex-col   justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input
              className="border-black border-2"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleName}
            />
            <input
              className="border-black border-2 mt-10"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            <input
              className="border-black border-2 mt-10"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePass}
            />
            <button type="submit" className="mt-12">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
