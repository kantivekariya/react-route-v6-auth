import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const isAuth = localStorage.getItem("user");

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [navigate, isAuth]);

  const onHandleChangeInput = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onHandleSubmit = () => {
    console.log(form.email.trim().toString().length);

    if (form.email.trim().toString().length <= 0) {
      alert("Please enter email address");
    } else if (form.password.trim().toString().length <= 0) {
      alert("Please enter password!");
    } else {
      localStorage.setItem("user", JSON.stringify(form));
      navigate("/");
    }
  };

  return (
    <div>
      <input
        placeholder="Please Enter Email"
        name="email"
        onChange={onHandleChangeInput}
      />
      <br />
      <input
        type="password"
        placeholder="Please Enter password"
        name="password"
        onChange={onHandleChangeInput}
      />
      <br />
      <button type="button" onClick={onHandleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
