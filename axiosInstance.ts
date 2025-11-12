import axiosOriginal from "axios";

const axios = axiosOriginal.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api/coffee",
});

axios.interceptors.request.use((config) => {
  if (config.headers && typeof document !== "undefined") {
    const match = document.cookie.match(/(^|;) *NEXT_LOCALE=([^;]+)/);
    const locale = match?.[2] || "en";
    config.headers["Accept-Language"] = locale;
  }
  return config;
});

export { axios };
