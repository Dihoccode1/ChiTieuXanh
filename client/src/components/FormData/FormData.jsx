import React, { useState } from "react";
import Title from "./Title/Title";
import InputForm from "./InputForm/InputForm";
import CallActionGroup from "./CallActionGroup/CallActionGroup";
import { LogInIcon, User } from "lucide-react";
import toast from "react-hot-toast";

const FormData = ({ isSignUp }) => {
  const formConfig = {
    signUp: {
      fields: [
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          label: "Email",
        },
        {
          name: "name",
          type: "text",
          placeholder: "Tên người dùng",
          label: "Tên người dùng",
        },
        {
          name: "password",
          type: "password",
          placeholder: "Mật khẩu",
          label: "Mật khẩu",
        },
        {
          name: "confirmPassword",
          type: "password",
          placeholder: "Xác nhận mật khẩu",
          label: "Xác nhận mật khẩu",
        },
      ],
      notices: {
        question: `Đã có tài khoản?`,
        secondChoice: "Đăng nhập",
        link: "/login",
      },
      action: {
        icon: User,
        text: "Tạo tài khoản",
      },
    },
    login: {
      fields: [
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          label: "Email",
        },
        {
          name: "password",
          type: "password",
          placeholder: "Mật khẩu",
          label: "Mật khẩu",
        },
      ],
      notices: {
        question: `Chưa có tài khoản?`,
        secondChoice: "Đăng ký ngay",
        link: "/sign-up",
      },
      action: {
        icon: LogInIcon,
        text: "Đăng nhập",
      },
    },
  };

  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  // Reset form khi chuyển tab
  const handleSetIsSignUp = (value) => {
    setIsSignUp(value);
    setFormValues({});
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Xóa lỗi của field khi người dùng bắt đầu nhập lại
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateSignUp = () => {
    const newErrors = {};
    const { email, name, password, confirmPassword } = formValues;

    if (!email || !email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!name || !name.trim()) {
      newErrors.name = "Vui lòng nhập tên người dùng.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Tên phải có ít nhất 2 ký tự.";
    }

    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu.";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp.";
    }

    return newErrors;
  };

  const validateLogin = () => {
    const newErrors = {};
    const { email, password } = formValues;

    if (!email || !email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = isSignUp ? validateSignUp() : validateLogin();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error(
        isSignUp
          ? "Vui lòng kiểm tra lại thông tin đăng ký!"
          : "Vui lòng kiểm tra lại thông tin đăng nhập!",
      );
      return;
    }

    // Không có lỗi → thực hiện submit
    if (isSignUp) {
      toast.success("Tạo tài khoản thành công! 🎉");
    } else {
      toast.success("Đăng nhập thành công! 👋");
    }

    // TODO: gọi API tại đây
    console.log("Form values:", formValues);
  };

  const handleFields = isSignUp
    ? formConfig.signUp.fields
    : formConfig.login.fields;

  return (
    <div className="min-w-md  bg-white rounded-3xl shadow-2xl p-10  ">
      <Title />
      <InputForm
        fields={handleFields}
        formValues={formValues}
        errors={errors}
        onChange={handleChange}
      />
      <CallActionGroup
        notices={
          isSignUp ? formConfig.signUp.notices : formConfig.login.notices
        }
        action={isSignUp ? formConfig.signUp.action : formConfig.login.action}
        setIsSignUp={handleSetIsSignUp}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default FormData;
