import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx"; // we'll add this file next

function App() {
  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <RegistrationForm />
      <hr style={{ margin: "32px 0" }} />
      <FormikForm />
    </div>
  );
}

export default App;
