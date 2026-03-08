import { useState } from "react";
import { menuItems } from "../data/menuData";

function Menu({ addToCart, cart, setCart }) {
  const [search, setSearch] = useState("");
  const [animatedId, setAnimatedId] = useState(null);

  // Filter items based on search
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Handle Add with animation
  const handleAdd = (item) => {
    setAnimatedId(item.id);

    // Delay adding so animation is visible
    setTimeout(() => {
      addToCart(item);
      setAnimatedId(null);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* HEADER + SEARCH */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          🍽 Our Menu
        </h1>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-orange-400 
                       focus:border-orange-500 transition"
          />

          {/* Suggestions Dropdown */}
          {search && (
            <div className="absolute bg-white w-full shadow-lg rounded-lg mt-1 
                            max-h-40 overflow-y-auto z-10">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSearch(item.name)}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">
                  No items found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MENU GRID */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden 
                         hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="font-semibold">{item.name}</h2>

                <p className="text-orange-600 font-bold mb-3">
                  ₹{item.price}
                </p>

                {/* BUTTON LOGIC */}
                {cart.some((cartItem) => cartItem.id === item.id) ? (

                  // If item is already in cart → show Remove
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg 
                               hover:bg-red-600 transition duration-300"
                  >
                    Remove ❌
                  </button>

                ) : (

                  // If item not in cart → show Add with animation
                  <button
                    onClick={() => handleAdd(item)}
                    className={`px-4 py-2 rounded-lg text-white 
                      transform transition-all duration-300
                      ${animatedId === item.id
                        ? "bg-orange-600 scale-125"
                        : "bg-orange-500 hover:bg-orange-600"}
                    `}
                  >
                    Add to Cart
                  </button>

                )}

              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No food found
          </p>
        )}
      </div>
    </div>
  );
}

export default Menu;
