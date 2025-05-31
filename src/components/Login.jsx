import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email : "
              placeholder="Email Address"
              type="email"
              className="focus:ring-1 focus:ring-blue-400 required:ring-red-600 invalid:ring-red-600"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-600 pl-1">
                <FontAwesomeIcon icon={faTriangleExclamation} />{" "}
                {errors.email.message || "This field is required!"}
              </span>
            )}
            <Input
              label="Password : "
              type="password"
              placeholder="Password"
              className="focus:ring-1 focus:ring-blue-400 invalid:ring-red-600"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <span className="text-sm text-red-600 pl-1">
                <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
                required and has to at least 8 chars!
              </span>
            )}
            <Button
              type="submit"
              className="w-full hover:bg-blue-700 shadow-lg hover:shadow-slate-400"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
