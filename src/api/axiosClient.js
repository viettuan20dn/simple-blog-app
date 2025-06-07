import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://6842a7070029b46c571c.fra.appwrite.run/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptor để xử lý lỗi chung
axiosClient.interceptors.response.use(
  response => response,
  error => {
    // Xử lý lỗi 401, 500,... ở đây nếu muốn
    if (error.response) {
      console.log("API Error:", error.response.status, error.response.data);
    } else {
      console.log("API Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;