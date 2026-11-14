import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import {
  filterDistricts,
  getUniqueDistricts,
} from "../../utils/districtSearch";

const MapFocus = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (!center) return;

    map.flyTo(center, zoom, { duration: 1.2 });
  }, [center, map, zoom]);

  return null;
};

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const serviceCenters = useLoaderData();
  const districtCount = useMemo(
    () => getUniqueDistricts(serviceCenters).length,
    [serviceCenters],
  );

  const [searchTerm, setSearchTerm] = useState("");
  const hasSearchQuery = searchTerm.trim().length > 0;

  const matchingDistricts = useMemo(
    () => filterDistricts(serviceCenters, searchTerm),
    [serviceCenters, searchTerm],
  );

  const mapCenters = useMemo(() => {
    if (!hasSearchQuery) return serviceCenters;

    return serviceCenters.filter(({ district }) =>
      district.toLowerCase().includes(searchTerm.trim().toLowerCase()),
    );
  }, [hasSearchQuery, searchTerm, serviceCenters]);

  const focusedCenter = useMemo(() => {
    if (!mapCenters.length) return null;
    return [mapCenters[0].latitude, mapCenters[0].longitude];
  }, [mapCenters]);

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12 ">
      <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-[#063f45] sm:text-5xl">
        We are available in {districtCount} districts
      </h1>
      <form className="mt-8 flex w-full max-w-xl items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm">
        <label className="flex min-w-0 flex-1 items-center gap-3 px-4 text-gray-500">
          <FaSearch aria-hidden="true" className="shrink-0 text-sm" />
          <span className="sr-only">Search districts</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search district"
            className="min-w-0 flex-1 bg-transparent py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </label>

        {hasSearchQuery ? (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
            className="mr-2 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-gray-700 transition-colors hover:bg-gray-100"
          >
            ×
          </button>
        ) : null}

        <button
          type="submit"
          aria-label="Search districts"
          className="mr-1 flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 text-gray-950 transition-colors hover:bg-lime-400"
        >
          <FaSearch className="text-sm" />
        </button>
      </form>

      <div className="mt-8 h-200 w-full border">
        <MapContainer
          center={focusedCenter || position}
          zoom={focusedCenter ? 11 : 8}
          scrollWheelZoom={false}
          className="h-200"
        >
          <MapFocus center={focusedCenter} zoom={focusedCenter ? 11 : 8} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mapCenters.map((center) => (
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

      {hasSearchQuery && (
        <div className="mt-6 max-w-xl rounded-xl border border-gray-200 bg-white p-5">
          <p className="font-semibold text-[#063f45]">
            {matchingDistricts.length
              ? `${matchingDistricts.length} district${matchingDistricts.length === 1 ? "" : "s"} found`
              : "No districts found"}
          </p>
          {matchingDistricts.length > 0 && (
            <ul className="mt-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
              {matchingDistricts.map((district) => (
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
