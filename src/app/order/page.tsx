export default function Order() {
  const orders = [
    { id: "1", date: "2023-05-01", total: 59.99, status: "Delivered" },
    { id: "2", date: "2023-05-15", total: 129.99, status: "Shipped" },
    { id: "3", date: "2023-05-20", total: 79.99, status: "Processing" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Order #{order.id}</span>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>${order.total.toFixed(2)}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  order.status === "Delivered"
                    ? "bg-green-200 text-green-800"
                    : order.status === "Shipped"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
