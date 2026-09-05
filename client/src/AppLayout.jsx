import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-screen h-full bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
