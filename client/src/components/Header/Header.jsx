import { LeafIcon } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import NavBar from "../ui/NavBar/NavBar";

const Header = () => {
  return (
    <header className="flex p-4 bg-background border-b border-border backdrop-blur-3xl justify-between items-center">
      <div className="flex gap-2 ">
        <LeafIcon
          className="w-10 h-10 bg-linear-to-r from-emerald-300 via-emerald-500 to-emerald-700 rounded-2xl p-2 "
          color="white"
        />
        <h2 className="text-2xl md:text-3xl text-emerald-500 font-bold">
          Ghi chú xanh
        </h2>
      </div>
      <Input
        className={`max-w-100 focus-visible:bg-gray-200 bg-gray-100`}
        placeholder="Tìm kiếm theo từ khóa hoặc #tag (VD:#ăn)"
      />
      <NavBar />
    </header>
  );
};

export default Header;
