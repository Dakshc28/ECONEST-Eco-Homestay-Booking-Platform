"use client";

import ErrorBoundary from "./ErrorBoundary";

export default function AppProviders({ children }) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}