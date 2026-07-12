"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui";

export default function Showcase() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  const handleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (loading) {
    return (
      <div className="py-20">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-green-800 mb-3">
          EcoNest UI Component Showcase
        </h1>

        <p className="text-gray-600 mb-10">
          Week 3 Component Library Demonstration
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Button Component
          </h2>

          <Button
            text="Book Eco Stay"
            onClick={() => alert("Button Clicked")}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Input Component
          </h2>

          <Input placeholder="Search eco-friendly homestays..." />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Modal Component
          </h2>

          <Button
            text="Open Modal"
            onClick={() => setShowModal(true)}
          />

          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <h3 className="text-xl font-bold mb-3">
              EcoNest Modal
            </h3>

            <p>
              This is a reusable modal component used throughout the
              application.
            </p>
          </Modal>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Toast Component
          </h2>

          <Button
            text="Show Toast"
            onClick={handleToast}
          />

          {showToast && (
            <div className="mt-4">
              <Toast message="Booking request submitted successfully!" />
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Loader Component
          </h2>

          <Loader />
        </div>

      </div>
    </div>
  );
}