import { useState } from "react";
import {
  FiAlertCircle,
  FiBell,
  FiCalendar,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiCreditCard,
  FiEdit2,
  FiFileText,
  FiGrid,
  FiHelpCircle,
  FiLock,
  FiLogOut,
  FiMapPin,
  FiMenu,
  FiMoreVertical,
  FiPackage,
  FiPlus,
  FiSettings,
  FiShoppingBag,
  FiTag,
  FiTruck,
  FiX,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";

const primaryLinks = [
  { label: "Dashboard", icon: FiGrid, to: "/dashboard", active: true },
  { label: "Deliveries", icon: FiPackage },
  { label: "Invoices", icon: FiFileText },
  { label: "Stores", icon: FiShoppingBag },
  { label: "Pricing Plan", icon: FiTag, to: "/pricing" },
  { label: "Coverage Area", icon: FiMapPin, to: "/coverage" },
];

const generalLinks = [
  { label: "Settings", icon: FiSettings },
  { label: "Change Password", icon: FiLock },
  { label: "Help", icon: FiHelpCircle, to: "/contact" },
];

const overviewCards = [
  { label: "To Pay", value: "129" },
  { label: "Ready Pick Up", value: "1,325" },
  { label: "In Transit", value: "50" },
  { label: "Ready to Deliver", value: "50" },
  { label: "Delivered", value: "50" },
];

const reports = [
  {
    id: "#RQ21534",
    client: "Rasel Ahmed",
    date: "Jan 6, 2025",
    weight: "10 kg",
    shipper: "DHL",
    price: "4,500.00",
    status: "Delivered",
  },
  {
    id: "#RQ21534",
    client: "Rakib Hossain",
    date: "Jan 8, 2025",
    weight: "15 kg",
    shipper: "Inpost",
    price: "9,800.00",
    status: "Delivered",
  },
  {
    id: "#RQ21534",
    client: "Rakib",
    date: "Feb 12, 2025",
    weight: "5 kg",
    shipper: "Pathao",
    price: "2,000.00",
    status: "Transit",
  },
  {
    id: "#RQ21534",
    client: "Abu Sufian",
    date: "Jan 6, 2025",
    weight: "7 kg",
    shipper: "Steadfast",
    price: "2,700.00",
    status: "Waiting",
  },
  {
    id: "#RQ21534",
    client: "Rasel Ahmed",
    date: "Jan 5, 2025",
    weight: "15 kg",
    shipper: "UPS",
    price: "1,500.00",
    status: "Transit",
  },
  {
    id: "#RQ21534",
    client: "Jhankar Mahbub",
    date: "Dec 22, 2024",
    weight: "10 kg",
    shipper: "DHL",
    price: "8,500.00",
    status: "Pending",
  },
];

const invoices = [
  { id: "#PTD 145142547", price: "4,500.00", date: "10 days ago" },
  { id: "#PTD 145142547", price: "9,800.00", date: "1 day ago" },
  { id: "#PTD 145142547", price: "2,000.00", date: "1 hour ago" },
  { id: "#PTD 145142547", price: "2,700.00", date: "2 hours ago" },
  { id: "#PTD 145142547", price: "1,500.00", date: "3 hours ago" },
  { id: "#PTD 145142547", price: "8,500.00", date: "4 hours ago" },
];

const shipmentAlerts = [
  { label: "Damaged", id: "#SP11251C", tone: "cyan" },
  { label: "Damaged", id: "#SP11251C", tone: "red" },
  { label: "Damaged", id: "#SP11251C", tone: "cyan" },
  { label: "Damaged", id: "#SP11251C", tone: "gray" },
];

const getCurrentUser = () => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : {};
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();
  const userName = user.name || "Merchant";
  const roleLabel = user.role === "admin" ? "Admin" : "Merchant";
  const initials = userName
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderNavLink = ({ label, icon: Icon, to, active }) => {
    const className = `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
      active
        ? "bg-[#c9ed62] font-bold text-[#1b2410]"
        : "text-[#62666b] hover:bg-gray-100"
    }`;

    return to ? (
      <Link
        key={label}
        to={to}
        onClick={() => setSidebarOpen(false)}
        className={className}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {label}
      </Link>
    ) : (
      <button
        key={label}
        type="button"
        disabled
        title={`${label} is not available yet`}
        className={`${className} cursor-not-allowed opacity-60`}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#f0f1f2] text-[#262a2e]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[250px] flex-col border-r border-gray-100 bg-white px-5 py-5 transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <Link to="/" aria-label="ZapShift home" className="flex items-center">
            <Logo />
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <FiX />
          </button>
        </div>

        <nav className="mt-5 flex-1 overflow-y-auto">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
            Menu
          </p>
          <div className="space-y-1">
            {primaryLinks.map(renderNavLink)}
          </div>

          <p className="mb-2 mt-7 text-xs font-medium uppercase tracking-wide text-gray-400">
            General
          </p>
          <div className="space-y-1">
            {generalLinks.map(renderNavLink)}
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-[#62666b] transition hover:bg-gray-100"
          >
            <FiLogOut className="h-4 w-4 shrink-0" />
            Logout
          </button>
        </nav>
      </aside>

      <div className="min-h-screen lg:ml-[250px]">
        <header className="flex h-[70px] items-center justify-between bg-white px-4 sm:px-7">
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          >
            <FiMenu className="h-5 w-5" />
          </button>
          <div className="hidden text-xs font-medium uppercase tracking-wide text-gray-400 sm:block">
            Merchant workspace
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-full border border-gray-200 p-2.5 text-gray-600"
            >
              <FiBell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#c9ed62]" />
            </button>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
              {initials || "M"}
            </span>
            <div className="hidden min-w-0 sm:block">
              <p className="max-w-40 truncate text-sm font-semibold text-gray-900">
                {userName}
              </p>
              <p className="text-xs text-gray-500">{roleLabel}</p>
            </div>
            <FiChevronDown className="hidden text-gray-500 sm:block" />
          </div>
        </header>

        <main className="space-y-6 p-4 sm:p-7">
          <div className="flex flex-col justify-between gap-4 border-b border-dashed border-gray-300 pb-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold tracking-tight text-[#202326] sm:text-3xl">
                  Dashboard Overview
                </h1>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
                  Sample data
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                View a snapshot of your delivery activity.
              </p>
            </div>
            <button
              type="button"
              disabled
              title="Parcel booking is not available yet"
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#c9ed62] px-5 py-3 text-sm font-bold text-gray-900 opacity-70 sm:self-auto"
            >
              <FiPlus className="h-5 w-5" />
              Add Parcel
            </button>
          </div>

          <section
            aria-label="Delivery totals"
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
          >
            {overviewCards.map((card, index) => (
              <article
                key={card.label}
                className="flex min-h-[104px] items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500">
                  {index === 0 ? (
                    <FiCreditCard className="h-5 w-5" />
                  ) : (
                    <FiTruck className="h-5 w-5" />
                  )}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {card.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-[#202b3a]">
                    {card.value}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-[#202326]">
                Overall Statistics
              </h2>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 opacity-70"
              >
                <FiCalendar />
                This Week
                <FiChevronDown />
              </button>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[620px]">
                <div className="relative h-[260px] border-b border-l border-gray-200">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {["$25k", "$20k", "$15k", "$10k", "$5k", "$1k"].map(
                      (label) => (
                        <div
                          key={label}
                          className="flex items-center border-t border-dashed border-gray-200"
                        >
                          <span className="absolute -left-12 w-10 text-right text-xs text-gray-500">
                            {label}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                  <svg
                    viewBox="0 0 700 240"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Sample weekly revenue chart"
                    className="absolute inset-0 h-full w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="dashboard-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#c9ed62" stopOpacity=".55" />
                        <stop offset="100%" stopColor="#c9ed62" stopOpacity=".03" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 145 L55 145 L115 95 L175 95 L235 167 L290 167 L340 202 L395 202 L455 137 L510 96 L570 96 L620 138 L660 138 L685 42 L700 42 L700 240 L0 240 Z"
                      fill="url(#dashboard-area)"
                    />
                    <path
                      d="M0 145 L55 145 L115 95 L175 95 L235 167 L290 167 L340 202 L395 202 L455 137 L510 96 L570 96 L620 138 L660 138 L685 42 L700 42"
                      fill="none"
                      stroke="#b9e83d"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                    <line
                      x1="400"
                      x2="400"
                      y1="0"
                      y2="240"
                      stroke="#a8d82f"
                      strokeDasharray="5 5"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <div className="ml-1 mt-3 flex justify-between text-xs text-gray-600">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <span key={day}>{day}</span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-[#202326]">
                Shipping Reports
              </h2>
              <div className="flex items-center gap-2 text-gray-500">
                <button
                  type="button"
                  disabled
                  aria-label="Filter shipping reports"
                  className="rounded-full border border-gray-200 p-2.5 opacity-70"
                >
                  <FiCalendar />
                </button>
                <button
                  type="button"
                  disabled
                  aria-label="More shipping report options"
                  className="rounded-full border border-gray-200 p-2.5 opacity-70"
                >
                  <FiMoreVertical />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-gray-50 text-xs text-gray-500">
                  <tr>
                    {[
                      "ID",
                      "Client",
                      "Date",
                      "Weight",
                      "Shipper",
                      "Price",
                      "Status",
                      "Action",
                    ].map((heading) => (
                      <th key={heading} className="px-3 py-3 font-medium">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reports.map((report, index) => (
                    <tr
                      key={`${report.client}-${index}`}
                      className={index % 2 ? "bg-gray-50/70" : "bg-white"}
                    >
                      <td className="whitespace-nowrap px-3 py-3.5 text-gray-600">
                        {report.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5">
                        {report.client}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5 text-gray-600">
                        {report.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5 text-gray-600">
                        {report.weight}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5 text-gray-600">
                        {report.shipper}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5 text-gray-600">
                        {report.price}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            report.status === "Delivered"
                              ? "bg-emerald-100 text-emerald-700"
                              : report.status === "Transit"
                                ? "bg-blue-100 text-blue-700"
                                : report.status === "Waiting"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5">
                        <button
                          type="button"
                          disabled
                          aria-label={`Edit ${report.id}`}
                          className="inline-flex items-center gap-1 text-gray-500 opacity-60"
                        >
                          <FiEdit2 />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 opacity-60"
              >
                <FiChevronLeft />
                Previous
              </button>
              <span>Page 1 of 10</span>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 opacity-60"
              >
                Next
                <FiChevronRight />
              </button>
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-2">
            <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-[#202326]">
                  Late Invoices
                </h2>
                <button
                  type="button"
                  disabled
                  className="rounded-full bg-[#c9ed62] px-4 py-2 text-sm font-semibold text-gray-900 opacity-70"
                >
                  View All Invoices
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px] text-left text-sm">
                  <thead className="bg-gray-50 text-xs text-gray-500">
                    <tr>
                      <th className="px-3 py-3 font-medium">No</th>
                      <th className="px-3 py-3 font-medium">Price</th>
                      <th className="px-3 py-3 font-medium">Date</th>
                      <th className="px-3 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {invoices.map((invoice, index) => (
                      <tr
                        key={`${invoice.id}-${index}`}
                        className={index % 2 ? "bg-gray-50/70" : "bg-white"}
                      >
                        <td className="whitespace-nowrap px-3 py-3 text-xs">
                          {invoice.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                          {invoice.price}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3 text-gray-500">
                          {invoice.date}
                        </td>
                        <td className="px-3 py-3 text-gray-500">
                          <button
                            type="button"
                            disabled
                            aria-label={`Invoice actions for ${invoice.id}`}
                            className="opacity-60"
                          >
                            <FiMoreVertical />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-[#202326]">
                  Shipment Alerts
                </h2>
                <button
                  type="button"
                  disabled
                  className="rounded-full bg-[#c9ed62] px-4 py-2 text-sm font-semibold text-gray-900 opacity-70"
                >
                  View All
                </button>
              </div>
              <div className="mb-4 grid grid-cols-2 rounded-xl bg-gray-50 p-4 text-center">
                <div>
                  <p className="text-xl font-bold">2</p>
                  <p className="text-sm text-gray-500">Damaged</p>
                </div>
                <div className="border-l border-dashed border-gray-300">
                  <p className="text-xl font-bold">10</p>
                  <p className="text-sm text-gray-500">Weather Delays</p>
                </div>
              </div>
              <ul className="divide-y divide-dashed divide-gray-200 rounded-xl border border-gray-200 px-4">
                {shipmentAlerts.map((alert, index) => (
                  <li
                    key={`${alert.id}-${index}`}
                    className="flex items-center gap-3 py-3"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        alert.tone === "red"
                          ? "bg-red-100 text-red-500"
                          : alert.tone === "cyan"
                            ? "bg-cyan-100 text-cyan-700"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <FiAlertCircle />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {alert.label}
                      </p>
                      <p className="truncate text-xs text-gray-500">
                        Shipment {alert.id} · 2 hours ago
                      </p>
                    </div>
                    <FiMoreVertical className="text-gray-500" />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
