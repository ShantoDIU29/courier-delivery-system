
const configuredApiUrl = import.meta.env.VITE_API_URL
  ?.trim()
  .replace(/\/+$/, "");

export const apiBaseUrl =
  configuredApiUrl ||
  (import.meta.env.PROD
    ? "https://courier-delivery-system-api.onrender.com"
    : "http://localhost:5002");
