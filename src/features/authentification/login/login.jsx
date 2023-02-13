import Button from "../../../components/button";
import InputField from "../../../components/inputField";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container">
      <div className="logo">
        <h2>
          EL <span>MOUVMA</span>{" "}
        </h2>
      </div>
      <div className="title">
        <h2>Login</h2>
      </div>
      <form className="input__fields" onSubmit={formik.handleSubmit}>
        <InputField
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="saad">{formik.errors.email}</div>
        )}
        <InputField
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <div className="saad">{formik.errors.password}</div>
        )}
        <Button name="Login" className="login__btn" />
      </form>
    </div>
  );
};

export default Login;
