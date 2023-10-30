import { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("light"); // Valor predeterminado

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      // Verifica si estamos en el lado del cliente y si matchMedia está disponible
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark" && typeof window !== "undefined") {
      // Verifica nuevamente si estamos en el lado del cliente antes de aplicar cambios a la clase "dark"
      document.querySelector("html").classList.add("dark");
    } else if (typeof window !== "undefined") {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, handleChangeTheme };
}

export default DarkMode;
