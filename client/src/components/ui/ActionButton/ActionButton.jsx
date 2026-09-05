import React from "react";
import { Button } from "../button";

const ActionButton = ({ action, Icon, onClick }) => {
  return (
    <Button
      variant="secondary"
      className={`bg-emerald-400 hover:bg-emerald-500 w-3/4 h-10    gap-2`}
      onClick={onClick}
    >
      <Icon color="white" />
      <span className="text-white">{action}</span>
    </Button>
  );
};

export default ActionButton;

