import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import AdminLogin from "./components/AdminLogin";
import ThemeToggle from "./components/ThemeToggle";

import { db, collection, addDoc, serverTimestamp } from "./firebase";

function App() {
  const [adminStage, setAdminStage] = useState("none"); // "none", "login", "verified"

  const handleFeedbackSubmit = async (data) => {
    const feedbackRef = collection(db, "feedbacks");
    await addDoc(feedbackRef, {
      ...data,
      timestamp: serverTimestamp(),
    });
  };

  return (
   <div className="app-container">
  <header className="app-header">
    <h1 className="app-title">Feedback Collector</h1>
    <div className="admin-actions">
      <ThemeToggle />
      {adminStage === "none" && (
        <button
          onClick={() => setAdminStage("login")}
          className="admin-login-button"
        >
          I'm an Admin
        </button>
      )}
      {adminStage === "verified" && (
        <button
          onClick={() => setAdminStage("none")}
          className="admin-logout-button"
        >
          Logout
        </button>
      )}
    </div>
  </header>

  <main className="app-main">
    {adminStage === "none" && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
    {adminStage === "login" && <AdminLogin onLogin={() => setAdminStage("verified")} />}
    {adminStage === "verified" && <FeedbackList />}
  </main>

  <footer className="app-footer">
    Created by <a href="https://github.com/vickyrathode" target="_blank" rel="noreferrer" style={{ color: "#007bff" }}>Vikki Rathod</a> – Feedback Collector © 2025
  </footer>
</div>

  );
}

export default App;
