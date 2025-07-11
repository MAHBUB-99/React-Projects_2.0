import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

export default function LoginForm() {
  const navigate = useNavigate();
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
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200);
      {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;
          setAuth({ user, authToken, refreshToken });
        }
      }
      console.log("Login successful with token : ", response.data.token.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type:"random",
        message:`User with email ${formData.email} is not found`,
      });
    }
  };

  return (
    <form
      className="border-b border-[#3f3f3f] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is required" })}
          type="email"
          name="email"
          id="email"
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-dray-200"
          }`}
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          type="password"
          name="password"
          id="password"
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-dray-200"
          }`}
        />
      </Field>
      <p >{errors?.root?.random?.message}</p>
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
