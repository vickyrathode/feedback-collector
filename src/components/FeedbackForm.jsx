import { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await onSubmit(formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
   <form onSubmit={handleSubmit} className="container">
  <h2>Send Feedback</h2>
  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Feedback" rows={4} />
  {error && <p style={{ color: "red" }}>{error}</p>}
  <button type="submit" disabled={loading}>
    {loading ? "Submitting..." : "Submit Feedback"}
  </button>
</form>

  );
};

export default FeedbackForm;
