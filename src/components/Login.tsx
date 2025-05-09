import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setToken, type AppDispatch } from "../store";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";

function Login() {
  //const [email, setEmail] = React.useState("");
  //const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  interface LoginFormValues {
    email: string;
    password: string;
  }
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    //e.preventDefault();
    setError("");
    try {
      /*  const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log("Login failed:", response);
        throw new Error("Login failed. Please check your credentials.");
      }
 */
      //const data = await response.json();

      dispatch(setToken("QpwL5tke4Pnpja7X4")); // Store in Redux store
      navigate("/Home"); // Redirect to home page after successful login
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
    setSubmitting(false);
  };

  return (
    <>
      <h2>Login</h2>
      <div className="login-form">
        <Formik<LoginFormValues>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="border p-4 rounded bg-light shadow-sm">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="form-control"
                id="email"
              />
              <div className="text-danger mt-1">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="form-control"
                id="password"
              />
              <div className="text-danger mt-1">
                <ErrorMessage name="password" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </Form>
        </Formik>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default Login;
