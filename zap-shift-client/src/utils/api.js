const configuredApiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, "");
const isLocalApiUrl = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(
  configuredApiUrl || "",
);

export const apiBaseUrl =
  configuredApiUrl && !isLocalApiUrl
    ? configuredApiUrl
    : import.meta.env.PROD
      ? "https://courier-delivery-system-api.onrender.com"
      : "";
