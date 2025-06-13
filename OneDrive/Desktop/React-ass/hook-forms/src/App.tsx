import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import "./App.css";
import { useState, useEffect } from "react";

type FormInput = {
  name: string;
  email: string;
  course: string;
};

const FormInputSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters"),
  email: yup
    .string()
    .email("Invalid email 💀")
    .required("Email is required"),
  course: yup.string().required("Please select a course"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormInput>({
    resolver: yupResolver(FormInputSchema),
  });

  const [formData, setFormData] = useState<FormInput | null>(null);

  // Auto-reset form after successful submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);


  return (
    <>
      <h2>Class Registration</h2>

      <form
        {...{
          onSubmit: handleSubmit((data) => {
            setFormData(data);
          }),
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            style={{ padding: "8px" }}
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            style={{ padding: "8px", marginTop: "8px" }}
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="course">Course</label> <br />
          <select {...register("course")} style={{ padding: "8px" }}>
            <option value="">Select...</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Law">Law</option>
            <option value="Education">Education</option>
          </select>
          {errors.course && (
            <span style={{ color: "red" }}>{errors.course.message}</span>
          )}
        </div>

        <button type="submit" style={{ marginTop: 12 }}>
          Register
        </button>
      </form>

      {formData && (
        <div style={{ marginTop: "20px" }}>
          <h3>🎉 Registration Successful!</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Course:</strong> {formData.course}</p>
        </div>
      )}
    </>
  );
}

export default App;