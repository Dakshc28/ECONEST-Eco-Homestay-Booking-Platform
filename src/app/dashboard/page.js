"use client";

import { useState } from "react";
import { Loader, Modal, Toast, Button } from "../../components/ui";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">
            EcoNest Dashboard
          </h1>

          <p className="text-gray-600">
            Manage bookings, guests and eco-tourism activities.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3>Total Bookings</h3>
            <p className="text-3xl font-bold mt-2">124</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3>Active Guests</h3>
            <p className="text-3xl font-bold mt-2">42</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3>Reviews</h3>
            <p className="text-3xl font-bold mt-2">89</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3>Eco Score</h3>
            <p className="text-3xl font-bold mt-2">95%</p>
          </div>

        </div>

        {/* Loader Component */}

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Loading Example
          </h2>

          <Loader />
        </div>

        {/* Modal Component */}

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Booking Actions
          </h2>

          <Button
            text="Open Booking Modal"
            onClick={() => setShowModal(true)}
          />

          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <h2 className="text-xl font-bold mb-3">
              Confirm Booking
            </h2>

            <p>
              Would you like to confirm this booking?
            </p>
          </Modal>
        </div>

        {/* Toast Component */}

        <div className="bg-white rounded-xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Notifications
          </h2>

          <Button
            text="Show Notification"
            onClick={() => setShowToast(true)}
          />

          {showToast && (
            <div className="mt-4">
              <Toast message="Booking request submitted successfully!" />
            </div>
          )}

        </div>

      </div>
    </div>
  );
}