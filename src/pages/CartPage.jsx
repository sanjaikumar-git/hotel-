import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function CartPage({ cart, increaseQty, decreaseQty }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <PageWrapper title="Your Cart">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <div className="space-y-6">

          {/* CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>
                <p className="text-gray-600">
                  ₹{item.price}
                </p>
              </div>

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>

                <span className="font-semibold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL + PAY BUTTON */}
          <div className="text-right space-y-4">
            <div className="text-xl font-bold">
              Total: ₹{total}
            </div>

            <button
              onClick={() => navigate("/payment", { state: { total } })}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Pay Now
            </button>
          </div>

        </div>
      )}
    </PageWrapper>
  );
}

export default CartPage;
