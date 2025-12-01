import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosinstance";

const EmailVerification = () => {
  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axiosInstance.get(`/verify-email?token=${token}`);
        if (!response.data.error) {
          setStatus("success");
          setMessage("Email verified successfully! You can now log in.");
          setTimeout(() => navigate("/login"), 2000);
        } else {
          setStatus("error");
          setMessage(response.data.message || "Verification failed.");
        }
      } catch (error) {
        setStatus("error");
        setMessage(
          error.response?.data?.message || "Verification failed. Please try again."
        );
      }
    };
    if (token) verifyEmail();
    else {
      setStatus("error");
      setMessage("No verification token provided.");
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {status === "verifying" && <div>Verifying your email...</div>}
      {status === "success" && <div className="text-green-600">{message}</div>}
      {status === "error" && <div className="text-red-600">{message}</div>}
    </div>
  );
};

export default EmailVerification;