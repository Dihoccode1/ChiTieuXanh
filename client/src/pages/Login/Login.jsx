import FormData from "@/components/FormData/FormData";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-screen h-full flex justify-center items-center bg-emerald-50">
      <FormData isSignUp={false} />
    </div>
  );
};

export default Login;
