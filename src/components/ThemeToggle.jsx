import { useEffect, useState } from "react";

const ThemeToggle = () => {
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  return (
 <button
  onClick={() => setDarkMode(!darkMode)}
  className="theme-toggle-button"
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

  );
};

export default ThemeToggle;
