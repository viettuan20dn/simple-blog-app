import axiosClient from './axiosClient';

const blogCardApi = {
  getAll: () => axiosClient.get('/blogcards'),
//   getById: (id) => axiosClient.get(`/blogcard/${id}`),
//   create: (data) => axiosClient.post('/blogcard', data),
//   update: (id, data) => axiosClient.put(`/blogcard/${id}`, data),
//   delete: (id) => axiosClient.delete(`/blogcard/${id}`)
};

export default blogCardApi;