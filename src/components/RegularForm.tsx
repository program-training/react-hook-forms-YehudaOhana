import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
interface FormData {
  username: string;
  email: string;
  password: string;
}
export function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>
      <input
        {...register("username", {
          required: "username is required",
          minLength: { value: 2, message: "Password is must 2" },
        })}
        placeholder="username"
      />
      <ErrorMessage errors={errors} name="username" />
      <ErrorMessage
        errors={errors}
        name="username"
        render={({ message }) => <p>{message}</p>}
      />
      <input
        {...register("email", { required: "email is required" })}
        type="email"
        placeholder="Email"
      />
      <ErrorMessage errors={errors} name="email" />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p>{message}</p>}
      />
      <input
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 8,
            message: "min 8 ",
          },
          maxLength: {
            value: 20,
            message: "max 20",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).*$/,
            message:
              "Must contain uppercase letter lowercase letter minimum 8 characters and maximum 20(@#$%^&+=)",
          },
        })}
        type="password"
        placeholder="Password"
      />
      <ErrorMessage errors={errors} name="password" />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <p>{message}</p>}
      />
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}
