import { Eye, EyeOffIcon } from "lucide-react";
import React from "react";

const ShowConfirmPasswordButton = ({ isShowConfirmPassword, handleShowConfirmPassword }) => {
  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
      {isShowConfirmPassword ? (
        <Eye onClick={handleShowConfirmPassword} />
      ) : (
        <EyeOffIcon onClick={handleShowConfirmPassword} />
      )}
    </div>
  );
};

export default ShowConfirmPasswordButton;
