export const env = {
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api/v1',
  CLIENT_ORIGIN: import.meta.env.VITE_CLIENT_ORIGIN ?? 'http://localhost:5173',
};
