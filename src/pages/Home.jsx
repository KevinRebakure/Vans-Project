import Footer from "../components/Footer";
import Nav1 from "../components/Nav1";

export default function Home() {
  return (
    <>
      <Nav1 />

      <div className="relative h-[400px] w-full">
        <img
          src="./home hill.png"
          className="h-full w-full object-cover brightness-75"
          alt=""
        />
        <div className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 space-y-4 text-white">
          <h1 className="text-3xl font-extrabold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="block w-full rounded-md bg-[#FF8C38] py-3 text-center font-semibold">
            Find your van
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}