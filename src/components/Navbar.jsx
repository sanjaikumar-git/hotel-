import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600">
          🍽️ MyRestaurant
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:block">
          <NavLink to="/" className="hover:text-orange-500 transition">
            Home
          </NavLink>
          <NavLink to="/menu" className="hover:text-orange-500 transition">
            Menu
          </NavLink>
          <NavLink to="/cart"> Cart ({cartCount}) 
          </NavLink>
          <NavLink to="/reservation" className="hover:text-orange-500 transition">
            Reservation
          </NavLink>
          <NavLink to="/contact" className="hover:text-orange-500 transition">
            Contact
          </NavLink>
         

        </nav>

        {/* Cart */}
        <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
          Cart: {cartCount}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
