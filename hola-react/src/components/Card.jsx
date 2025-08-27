export default function Card({ title, content }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
}