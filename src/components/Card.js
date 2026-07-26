export default function Card({
  title,
  description,
  image,
  action,
  location,
  price,
  ecoScore,
  onAction,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">

      <img
        src={
          image ||
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        }
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {description}
          </p>
        )}

        <div className="mt-4 space-y-2">

          <p className="text-gray-700 dark:text-gray-200">
            📍 <strong>Location:</strong> {location}
          </p>

          <p className="text-gray-700 dark:text-gray-200">
            💰 <strong>Price:</strong> ₹{price}
          </p>

          <p className="text-green-700 dark:text-green-400 font-semibold">
            🌿 Eco Score: {ecoScore}
          </p>

        </div>

        {/* Showcase Button */}

        {action && (
          <button
            onClick={onAction}
            className="mt-5 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition"
          >
            {action}
          </button>
        )}

        {/* Dashboard Buttons */}

        {(onEdit || onDelete) && (
          <div className="flex gap-3 mt-5">

            {onEdit && (
              <button
                onClick={onEdit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Edit
              </button>
            )}

            {onDelete && (
              <button
                onClick={onDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
              >
                Delete
              </button>
            )}

          </div>
        )}

      </div>

    </div>
  );
}