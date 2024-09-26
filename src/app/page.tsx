import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our E-commerce App</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/store"
          className="bg-blue-500 text-white p-4 rounded-lg text-center"
        >
          Browse Store
        </Link>
        <Link
          href="/order"
          className="bg-green-500 text-white p-4 rounded-lg text-center"
        >
          View Orders
        </Link>
        <Link
          href="/profile"
          className="bg-purple-500 text-white p-4 rounded-lg text-center"
        >
          My Profile
        </Link>
        <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
          Today's Deals
        </div>
      </div>
    </div>
  );
}
