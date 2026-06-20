/**
 * Toast Component
 * @param {string} message
 */

export default function Toast({ message }) {
  return (
    <div className="bg-green-700 text-white px-4 py-3 rounded-lg shadow">
      {message}
    </div>
  );
}