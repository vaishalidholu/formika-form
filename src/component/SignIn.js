import React, { useState } from "react";
// import { useFormik } from "formik";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SignIn() {
  // const [active, setActive] = useState(false);

  // const handleChange = () => {
  //   setActive(!active);
  // };

  const validationSchema = yup.object({
    username: yup.string().max(15, "must be 15 character orless").required(),
    email: yup.string().email("invalid email").required(),
    password: yup.string().max(15, "must be 15 character or less").required(),
    number: yup.string().required(),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          username: "",
          email: "",
          password: "",
          number: "",
          country: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label>username:</label>
            <Field name="username" type="text" />

            <div style={{ color: "red" }}>
              <ErrorMessage name="username" />
            </div>
            <br />

            <label>email:</label>
            <Field name="email" type="email" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="email" />
            </div>
            <br />
            <label>password:</label>
            <Field name="password" type="password" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="password" />
            </div>
            <br />
            <label>number:</label>
            <Field name="number" type="number" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="number" />
            </div>
            <br />
            <label>country:</label>
            <Field name="country" as="select">
              <option value="india">india</option>
              <option value="china">china</option>
              <option value="japan">japan</option>
              <option value="span">spen</option>
              <option value="u.s">u.s</option>
              <option value="canada">canada</option>
            </Field>
            <br />
            <br />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
