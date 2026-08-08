"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input, Button } from "../../components/ui";

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
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
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration Successful!");

      router.push("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold mb-2">
            Create Account
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join EcoNest and explore sustainable stays.
          </p>

          <div className="space-y-4">

            <Input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />

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
              text={
                loading
                  ? "Creating Account..."
                  : "Register"
              }
              onClick={handleRegister}
            />

          </div>

        </div>
      </div>
    </div>
  );
}