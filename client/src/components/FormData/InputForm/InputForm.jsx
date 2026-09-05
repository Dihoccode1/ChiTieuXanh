import React from "react";
import { InputField } from "./InputField/InputField";

const InputForm = ({ fields }) => {
  return (
    <article className="">
      {fields.map((field) => (
        <InputField key={field.name} {...field} />
      ))}
    </article>
  );
};

export default InputForm;
