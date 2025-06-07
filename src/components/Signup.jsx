import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { Button } from "./index";
import Input from "./Input";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = async (data) => {
    setError("");
    setLoading(true);
    try { 
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();        
        if (userData) dispatch(login({userData}));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(createUser)} className="mt-8">
          <div className="space-y-5">
            <Input
              {...register("name", { required: true })}
              label={`Full Name<span className="text-red-600">*</span>: `}
              placeholder="Full Name"
              aria-invalid={!!errors.name}
              disabled={loading}
              className="focus:ring-1 focus:ring-blue-400 focus:invalid:ring-1 focus:invalid:ring-red-600"
            />
            {errors.name && (
              <span className="text-sm text-red-600 pl-1">
                <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
                required!
              </span>
            )}
            <Input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              label={`Email<span className="text-red-600">*</span>: `}
              placeholder="Email Address"
              type="email"
              disabled={loading}
              aria-invalid={errors.mail ? "true" : "false"}
              className="focus:ring-1 focus:ring-blue-400 focus:invalid:ring-1 focus:invalid:ring-red-600"
            />
            {errors.email && (
              <span className="text-sm text-red-600 pl-1">
                <FontAwesomeIcon icon={faTriangleExclamation} />{" "}
                {errors.email.message || "This field is required!"}
              </span>
            )}
            <Input
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              label={`Password<span className="text-red-600">*</span>: `}
              type="password"
              aria-invalid={!!errors.password}
              placeholder="Password"
              disabled={loading}
              className="focus:ring-1 focus:ring-blue-400 focus:invalid:ring-1 focus:invalid:ring-red-600"
            />
            {errors.password && (
              <span className="text-sm text-red-600 pl-1">
                <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
                required and has to at least 8 chars!
              </span>
            )}
            <Button
              type="submit"
              disabled={loading}
              className="w-full hover:bg-blue-700 shadow-lg hover:shadow-slate-400"
            >
              {loading ? "Loading..." : "Create Account"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
