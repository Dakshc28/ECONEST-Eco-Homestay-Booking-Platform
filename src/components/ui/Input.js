/**
 * Input Component
 * Reusable input field
 */

export default function Input({
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  );
}