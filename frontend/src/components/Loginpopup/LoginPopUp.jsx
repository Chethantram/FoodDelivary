import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const {url,setToken,token} = useContext(StoreContext);

  const [currState, setCurrState] = useState("Signup");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin=async(event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState=="Login") {
      newUrl+="api/user/login";
    } else {
      newUrl+="api/user/register";
    }

    const response = await axios.post(newUrl,data);
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    } else {
      alert(response.data.message);
    }

  }
  
  
  




  return (
    <div className="login absolute w-[100%] h-[100%] grid z-1 ">
      <div className="container max-w-[24vw] mx-auto my-auto rounded-2xl p-8 bg-white  text-black  flex flex-col gap-6 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-2xl text-black font-bold">{currState}</h2>
          <img
            className="cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
          />
        </div>
        <div className="login-form">
          <form onSubmit={onLogin}>
            <div className="w-full flex flex-col gap-6">
              {currState === "Login" ? (
                <></>
              ) : (
                <input
                  onChange={onChangeHandler}
                  value={data.name}
                  name="name"
                  className="outline-none border-2 rounded-xl text-md border-gray-400 p-2"
                  type="text"
                  placeholder="FullName"
                  
                />
              )}

              <input
                onChange={onChangeHandler}
                value={data.email}
                name="email"
                className="outline-none border-2 rounded-xl text-md border-gray-400 p-2"
                type="email"
                placeholder="Email"
                
              />
              <input
                onChange={onChangeHandler}
                value={data.password}
                name="password"
                className="outline-none border-2 rounded-xl text-md border-gray-400 p-2"
                type="password"
                placeholder="Password"
                
              />

              <button
                className=" cursor-pointer w-full bg-orange-500 p-2 text-white rounded-xl"
                type="submit"
              >
              {currState}
              </button>
            </div>
            <div className="login-checkbox my-3 flex gap-5">
              <input
                className="cursor-pointer"
                required
                type="checkbox"
                
              />
              <p className="text-sm">
                By continuing , you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
            <div className="text-md text-center">
              {currState === "Signup" ? (
                <p>
                  Already Have an Account?{" "}
                  <span
                    className="text-orange-500 cursor-pointer"
                    onClick={() => setCurrState("Login")}
                  >
                    Login Here
                  </span>
                </p>
              ) : (
                <p>
                  Create a New Account?{" "}
                  <span
                    className="text-orange-500 cursor-pointer"
                    onClick={() => setCurrState("Signup")}
                  >
                    Click Here
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;
