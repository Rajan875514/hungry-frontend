// clientConfig.js
// This file *might* also need to be processed by Vite to pick up VITE_ prefixed variables.
// It's usually simpler to directly use import.meta.env in components/slices.
// However, if you insist on a separate config file for frontend, ensure it's loaded correctly by your bundler.
// A common pattern is:
export const STRIPE_Publishable_key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
export const BASE_URL = import.meta.env.VITE_BACKEND_URL;