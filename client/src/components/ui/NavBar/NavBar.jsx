import React from "react";
import { Button } from "../button";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ModeToggle from "@/components/ModeToggle/ModeToggle";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center  gap-2 p-4">
      <ModeToggle />
      <div className="flex justify-center gap-1">
        <span>Chào</span>
        <h2>Người dùng</h2>
      </div>
      <Button
        onClick={() => navigate("/sign-up")}
        className={` hover:bg-rose-50 transition-all duration-300 bg-white `}
      >
        <LogOutIcon color="red" size={32} />
      </Button>
    </div>
  );
};

export default NavBar;
