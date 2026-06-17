export default function Card({
  title,
  description,
  image,
  action,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        {action && (
          <button className="bg-green-700 text-white px-4 py-2 rounded">
            {action}
          </button>
        )}
      </div>
    </div>
  );
}