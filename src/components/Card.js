export default function Card({
  title,
  description,
  image,
  action,
  location,
  price,
  ecoScore,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition">

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

        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>

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

        {action && (
          <button className="mt-5 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition">
            {action}
          </button>
        )}

      </div>

    </div>
  );
}