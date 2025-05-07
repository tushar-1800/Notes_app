import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaCheckCircle } from "react-icons/fa";

export default function PasswordInput({ password, onChange, placeholder }) {
  const [showPass, setShowPass] = useState(false);
  const [criteria, setCriteria] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const validatePassword = (value) => {
    const minLength = value.length >= 8;
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    setCriteria({
      minLength,
      hasNumber,
      hasSpecialChar,
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(e);
    validatePassword(value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 ">
        <input
          type={showPass ? "text" : "password"}
          value={password}
          onChange={handleChange}
          placeholder={placeholder || "Password"}
          className="w-full text-sm py-3 mr-3 bg-transparent rounded outline-none"
        />

        {showPass ? (
          <FaRegEye
            size={22}
            className="text-primary cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          />
        ) : (
          <FaRegEyeSlash
            size={22}
            className="text-primary cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          />
        )}
      </div>

      <div className="text-xs text-gray-600">
        <p className="flex items-center gap-2">
          {criteria.minLength ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <span className="text-gray-400">•</span>
          )}
          At least 8 characters
        </p>
        <p className="flex items-center gap-2">
          {criteria.hasNumber ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <span className="text-gray-400">•</span>
          )}
          Includes a number
        </p>
        <p className="flex items-center gap-2">
          {criteria.hasSpecialChar ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <span className="text-gray-400">•</span>
          )}
          Includes a special character
        </p>
      </div>
    </div>
  );
}
