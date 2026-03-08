import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { tables } from "../data/tablesData";

function Reservation() {
  const navigate = useNavigate();

  const handleBooking = (table) => {
    navigate("/payment", {
      state: {
        total: table.price,
        type: "reservation",
      },
    });
  };

  return (
    <PageWrapper title="Reserve a Table">

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {tables.map((table) => (
          <div
            key={table.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={table.image}
              alt={`Table ${table.id}`}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">
                Table {table.id}
              </h2>

              <p className="text-orange-600 font-bold mb-4">
                ₹{table.price}
              </p>

              <button
                onClick={() => handleBooking(table)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book Table
              </button>
            </div>
          </div>
        ))}

      </div>

    </PageWrapper>
  );
}

export default Reservation;
