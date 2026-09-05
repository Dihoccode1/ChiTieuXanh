import React from "react";
import { InputField } from "./InputField/InputField";

const InputForm = ({ fields, formValues, errors, onChange }) => {
  return (
    <article className="">
      {fields.map((field) => (
        <InputField
          key={field.name}
          {...field}
          value={formValues[field.name] || ""}
          error={errors[field.name] || ""}
          onChange={onChange}
        />
      ))}
    </article>
  );
};

export default InputForm;
