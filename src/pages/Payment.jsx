import { useLocation, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import qr from "../assets/qr.png";

import { useState } from "react";
import Toast from "../components/Toast";


function Payment({ setCart }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");


  const total = location.state?.total || 0;

  const handlePaymentDone = () => {
    // Clear Cart
    setCart([]);

    // Show success alert
    const type = location.state?.type;

if (type === "reservation") {
  setToastMessage("✅ Your table has been booked successfully!");
} else {
  setToastMessage("✅ Your food has been ordered successfully!");
}

setShowToast(true);

setTimeout(() => {
  setCart([]);
  navigate("/menu");
}, 2500);


    
  };

  return (
    <PageWrapper title="Payment">

      <div className="max-w-xl mx-auto text-center">

        {/* Amount Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Total Amount
          </h2>
          <p className="text-3xl font-bold text-orange-500">
            ₹{total}
          </p>
        </div>

        {/* QR Section */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <p className="mb-4 text-gray-600">
            Scan this QR Code to complete your payment
          </p>

          <div className="flex justify-center">
            <img
              src={qr}
              alt="QR Code"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Back to Cart
          </button>

          <button
            onClick={handlePaymentDone}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Payment Done
          </button>
        </div>

      </div>

      <Toast
  message={toastMessage}
  show={showToast}
  setShow={setShowToast}
/>


    </PageWrapper>
  );
}

export default Payment;
