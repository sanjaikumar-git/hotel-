function Cart({ cart, increaseQty, decreaseQty }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed right-0 top-20 w-80 bg-white shadow-lg p-4 h-[80vh] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">
              ₹{item.price} × {item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="bg-green-500 text-white px-2 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr className="my-4" />

      <h3 className="text-lg font-bold">
        Total: ₹{total}
      </h3>
    </div>
  );
}

export default Cart;
