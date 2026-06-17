function Card({ title, description }) {
  return (
    <div className="border rounded-xl shadow-md p-6 w-80 bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;