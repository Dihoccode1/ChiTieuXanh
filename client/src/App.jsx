import React from "react";
import AppLayout from "./AppLayout";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ContentBox from "./pages/ContentBox/ContentBox";
const App = () => {
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false} // Toast mới xuất hiện trên hay dưới
        toastOptions={{
          // Áp dụng cho mọi loại toast
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          // Áp dụng riêng cho toast.success
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ContentBox />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
