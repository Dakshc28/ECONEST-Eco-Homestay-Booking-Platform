"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { Input, Button } from "../../components/ui";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful!");

      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Login to access your EcoNest account.
          </p>

          <div className="space-y-4">

            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              text={loading ? "Logging in..." : "Login"}
              onClick={handleLogin}
            />

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />

              <span className="mx-3 text-gray-500">
                OR
              </span>

              <hr className="flex-grow border-gray-300" />
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 rounded-lg py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Continue with Google
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}