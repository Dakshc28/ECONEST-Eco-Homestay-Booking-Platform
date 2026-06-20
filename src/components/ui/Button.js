/**
 * Button Component
 * @param {string} text - Button label
 * @param {function} onClick - Click handler
 * @param {string} type - Button type
 */

export default function Button({
  text,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
    >
      {text}
    </button>
  );
}