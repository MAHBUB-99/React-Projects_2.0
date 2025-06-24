import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { accessToken, refreshToken, user } = response.data;

        if (accessToken) {
          const authToken = accessToken;
          const refreshTokenn = refreshToken;

          // console.log(
          //   `Login time auth token: ${authToken} and refresh token: ${refreshTokenn}`
          // );
          setAuth({ user, authToken, refreshTokenn });

          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Username/Email/Phone Field */}
        <Field error={errors.email}>
          <input
            {...register("email", {
              required: "This field is required",
            })}
            type="text"
            id="email"
            className={`form-input w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Phone number, username, or email"
            aria-label="Phone number, username, or email"
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
              className={`form-input w-full p-2 pr-16 border rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Password"
              aria-label="Password"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </Field>

        {/* Login Button */}
        <Field>
          <button type="submit" className="login-button cursor-pointer">
            Log in
          </button>
        </Field>

        {/* OR Separator */}
        <div className="or-separator">OR</div>

        {/* Google Login Button */}
        <Field>
          <button
            type="button"
            onClick={() => console.log("Google login clicked")}
            className="login-button cursor-pointer"
          >
            Log in with Google
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
