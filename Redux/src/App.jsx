import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className={`fixed z-10 right-3 top-3 sm:right-6 sm:top-6 text-lg p-1 rounded-md ${theme=='dark' ?'bg-yellow-600 text-[#fff]' : 'bg-slate-800 text-[#fff]' }`}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <TodoList />
    </>
  );
}

export default App;
