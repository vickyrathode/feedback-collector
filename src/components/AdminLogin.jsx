import { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [form, setForm] = useState({ id: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, password } = form;

    if (id === "admin" && password === "admin12") {
      onLogin();
    } else {
      setError("Invalid admin credentials.");
    }
  };

  return (
   <form onSubmit={handleSubmit} className="container ">
  <h2 className="form-title">Admin Login</h2>

  <input
    type="text"
    name="id"
    value={form.id}
    onChange={handleChange}
    placeholder="Admin ID"
    className="form-input"
  />
  <input
    type="password"
    name="password"
    value={form.password}
    onChange={handleChange}
    placeholder="Password"
    className="form-input"
  />

  {error && <p className="form-error">{error}</p>}

  <button type="submit" className="form-button">
    Login
  </button>
</form>

  );
};

export default AdminLogin;
