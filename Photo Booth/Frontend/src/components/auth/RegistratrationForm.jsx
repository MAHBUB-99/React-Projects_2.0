import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../common/Field";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log("Signup Data:", formData);
    navigate("/");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Email Field */}
        <Field error={errors.email}>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            type="text"
            id="email"
            className={`form-input ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Email"
            aria-label="Email"
          />
        </Field>

        {/* Full Name Field */}
        <Field error={errors.fullName}>
          <input
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            type="text"
            id="fullName"
            className={`form-input ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Full Name"
            aria-label="Full Name"
          />
        </Field>

        {/* Password Field */}
        <Field error={errors.password}>
          <div className="relative">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type={showPassword ? "text" : "password"}
              id="password"
              className={`form-input pr-16 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Password"
              aria-label="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </Field>

        {/* Confirm Password Field */}
        <Field error={errors.confirmPassword}>
          <div className="relative">
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className={`form-input pr-16 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </Field>

        {/* Signup Button */}
        <Field>
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </Field>

      </form>
    </div>
  );
};

export default RegistrationForm;
