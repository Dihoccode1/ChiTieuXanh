import { Eye, EyeOffIcon } from "lucide-react";
import React from "react";

const ShowPasswordButton = ({ isShowPassword, handleShowPassword }) => {
  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
      {isShowPassword ? (
        <Eye onClick={handleShowPassword} />
      ) : (
        <EyeOffIcon onClick={handleShowPassword} />
      )}
    </div>
  );
};

export default ShowPasswordButton;
