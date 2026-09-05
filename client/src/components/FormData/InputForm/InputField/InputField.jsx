import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ShowPasswordButton from "./ShowPasswordButton/ShowPasswordButton";
import ShowConfirmPasswordButton from "./ShowConfirmPasswordButton/ShowConfirmPasswordButton";

export function InputField({ value, error, onChange, ...props }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  const getInputType = () => {
    if (props.name === "password") return isShowPassword ? "text" : "password";
    if (props.name === "confirmPassword") return isShowConfirmPassword ? "text" : "password";
    return props.type;
  };

  return (
    <Field className={`gap-1 p-2 `}>
      <FieldLabel>{props.label}</FieldLabel>
      <div className="relative">
        <Input
          className={`bg-slate-100 ${error ? "border border-red-400 focus-visible:ring-red-300" : ""}`}
          id={props.name}
          name={props.name}
          type={getInputType()}
          placeholder={props.placeholder}
          value={value}
          onChange={onChange}
        />
        {props.name === "password" && (
          <ShowPasswordButton
            isShowPassword={isShowPassword}
            handleShowPassword={handleShowPassword}
          />
        )}
        {props.name === "confirmPassword" && (
          <ShowConfirmPasswordButton
            handleShowConfirmPassword={handleShowConfirmPassword}
            isShowConfirmPassword={isShowConfirmPassword}
          />
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-0.5 pl-1">{error}</p>
      )}
    </Field>
  );
}


