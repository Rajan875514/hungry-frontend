




// // Located at: C:/Users/rajan/Downloads/Hungry_food/Hungry_food/Hungry_food/reastaurant/client/src/Helpers/axiosInstance.js
// import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api/v1', // Using import.meta.env
//     withCredentials: true,
// });

// export default axiosInstance;







import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // always from .env
  withCredentials: true,
});

export default axiosInstance;
