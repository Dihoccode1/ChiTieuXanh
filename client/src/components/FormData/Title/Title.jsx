import { Leaf } from "lucide-react";
import React from "react";

const Title = () => {
  return (
    <header className="flex items-center gap-4  flex-col ">
      <Leaf
        color="white"
        className="bg-emerald-500 p-2 rounded-2xl h-20 w-20 "
      />
      <h1 className="text-2xl font-bold text-emerald-800">Ghi Chú Xanh</h1>
      <p className="text-emerald-700 font-medium">
        Nơi lưu giữ ý tưởng của bạn
      </p>
    </header>
  );
};

export default Title;
