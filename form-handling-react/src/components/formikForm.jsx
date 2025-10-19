
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/**
 * Formik form implementation.
 * Filename: formikForm.jsx
 */

const validationSchema = Yup.object({
  username: Yup.string().trim().required("Username is required."),
  email: Yup.string().email("Invalid email address").required("Email is required."),
  password: Yup.string().min(6, "Password must be at least 6 characters.").required("Password is required.")
});

const initialValues = {
  username: "",
  email: "",
  password: ""
};

const FormikForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      setStatus({ success: `Registration successful (mock). Response id: ${data.id}` });
      resetForm();
    } catch (err) {
      setStatus({ error: `Registration failed. ${err.message}` });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Formik Registration Form</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontWeight: 600 }}>Username</label>
              <Field name="username" placeholder="Enter username" style={{ width: "100%", padding: 8 }} />
              <div style={{ color: "red", marginTop: 4 }}>
                <ErrorMessage name="username" />
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontWeight: 600 }}>Email</label>
              <Field name="email" placeholder="you@example.com" />
              <div style={{ color: "red", marginTop: 4 }}>
                <ErrorMessage name="email" />
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontWeight: 600 }}>Password</label>
              <Field name="password" type="password" placeholder="At least 6 characters" />
              <div style={{ color: "red", marginTop: 4 }}>
                <ErrorMessage name="password" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} style={{ padding: "8px 16px" }}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && status.success && <div style={{ marginTop: 12, color: "green" }}>{status.success}</div>}
            {status && status.error && <div style={{ marginTop: 12, color: "red" }}>{status.error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

