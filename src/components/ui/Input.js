/**
 * Input Component
 * @param {string} placeholder
 * @param {string} type
 */

export default function Input({
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-3 w-full"
    />
  );
}