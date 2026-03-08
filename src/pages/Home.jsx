import PageWrapper from "../components/PageWrapper";
import hero from "../assets/restaurant.jpg";
import aboutImg from "../assets/about.jpg"; // add this image

function Home() {
  return (
    <PageWrapper title="Welcome to Our Restaurant">
      
      {/* Hero Image */}
      <img
        src={hero}
        alt="Restaurant"
        className="w-full object-contain rounded-lg mb-6"
      />

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        Welcome to our restaurant where taste meets tradition.
        We serve fresh, delicious meals made with love and passion.
      </p>


      {/* ABOUT SECTION ADDED BELOW */}
      <div className="grid md:grid-cols-2 gap-8 items-center">

        {/* About Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={aboutImg}
            alt="About Restaurant"
            className="w-full h-[350px] object-cover 
            hover:scale-105 transition duration-500"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            About Us
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our restaurant has been serving customers with authentic
            flavors and premium quality ingredients. We believe in
            delivering not just food, but a complete dining experience.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From online delivery to table reservations, we ensure
            comfort, hygiene, and excellent service for every guest.
          </p>
        </div>

      </div>

    </PageWrapper>
  );
}

export default Home;
