import { useEffect } from "react";

function Toast({ message, show, setShow }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000); // auto close after 3s

      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
      <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
        {message}
      </div>
    </div>
  );
}

export default Toast;
