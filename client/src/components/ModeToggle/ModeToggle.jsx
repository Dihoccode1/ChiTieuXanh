import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/Theme/ThemeProvider";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // Nếu đang system/light → chuyển dark; nếu đang dark → chuyển light
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button size="icon" variant="outline" onClick={toggleTheme}>
      {/* Sun: hiển thị ở light mode, ẩn ở dark mode */}
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      {/* Moon: ẩn ở light mode, hiển thị ở dark mode */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
