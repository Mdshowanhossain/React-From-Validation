import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
const Form = () => {
  const [userInfo, setUserInfo] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserInfo(data);
  };
  return (
    <>
      <div className="form_container">
        <div className="form_wrapper">
          <div className="form_input_wrapper">
            <pre className="form_pre">
              {JSON.stringify(userInfo, undefined, 2)}
            </pre>

            <h1 className="form_title">Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="username">
                <p className="input_title">Username</p>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 4,
                      message: "Username must be at least 4 characters",
                    },
                  })}
                />
                <p className="err_message">{errors.username?.message}</p>
              </div>
              <div className="email">
                <p className="input_title">Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "This is not a valid Email",
                    },
                  })}
                />
                <p className="err_message">{errors.email?.message}</p>
              </div>
              <div className="password">
                <p className="input_title">Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Password must be at least 4 characters",
                    },
                    maxLength: {
                      value: 4,
                      message: "Password cannot exceed more than 10 characters",
                    },
                  })}
                />
                <p className="err_message">{errors.password?.message}</p>
              </div>
              <button type="submit" className="submit_btn">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
