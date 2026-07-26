"use client";

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Something went wrong
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            An unexpected error occurred. Please refresh the page and try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;