function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-center md:text-left">

        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <p className="text-sm text-gray-400">
            Serving delicious food with love and passion.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
          <p className="text-sm text-gray-400">Mon - Sun: 10 AM - 11 PM</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">+91 9876543210</p>
          <p className="text-sm text-gray-400">restaurant@email.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
        © 2026 MyRestaurant. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
