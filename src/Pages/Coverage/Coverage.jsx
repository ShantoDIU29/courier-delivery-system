import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const serviceCenters = useLoaderData();
  const districtCount = new Set(serviceCenters.map(({ district }) => district))
    .size;

  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);

  const matchingDistricts = serviceCenters.filter(({ district }) =>
    district.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  const handleSearch = (event) => {
    event.preventDefault();
    setSearched(true);
  };

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12 ">
      <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-[#063f45] sm:text-5xl">
        We are available in {districtCount} districts
      </h1>
      <form
        onSubmit={handleSearch}
        className="mt-8 flex w-full max-w-xl items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm"
      >
        <label className="flex min-w-0 flex-1 items-center gap-3 px-4 text-gray-500">
          <FaSearch aria-hidden="true" className="shrink-0 text-sm" />
          <span className="sr-only">Search districts</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setSearched(false);
            }}
            placeholder="Search here"
            className="min-w-0 flex-1 bg-transparent py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </label>
        <button
          type="submit"
          className="mr-1 rounded-full bg-lime-300 px-7 py-2.5 text-sm font-bold text-gray-950 transition-colors hover:bg-lime-400"
        >
          Search
        </button>
      </form>

      <div className="mt-8 h-200 w-full border">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-200"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center) => (
            <Marker
              key={`${center.latitude}-${center.longitude}`}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <strong>{center.district}</strong>
                <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {searched && (
        <div className="mt-6 max-w-xl rounded-xl border border-gray-200 bg-white p-5">
          <p className="font-semibold text-[#063f45]">
            {matchingDistricts.length
              ? `${matchingDistricts.length} district${matchingDistricts.length === 1 ? "" : "s"} found`
              : "No districts found"}
          </p>
          {matchingDistricts.length > 0 && (
            <ul className="mt-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
              {matchingDistricts.map(({ district }) => (
                <li key={district}>{district}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};

export default Coverage;
