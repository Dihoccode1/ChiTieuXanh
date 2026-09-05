import ActionButton from "@/components/ui/ActionButton/ActionButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const CallActionGroup = ({ notices, action, onSubmit }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center   flex-col">
      {/* Truyền thẳng tham chiếu action.icon */}
      <ActionButton
        action={action.text}
        Icon={action.icon}
        onClick={() => {
          onSubmit();
          navigate("/");
        }}
      />
      <div className="flex gap-2">
        {" "}
        <p>{notices.question}</p>
        <span
          onClick={() => {
            navigate(notices.link);
          }}
          className="font-semibold text-emerald-500 hover:text-emerald-700"
        >
          {notices.secondChoice}
        </span>
      </div>
    </div>
  );
};

export default CallActionGroup;
