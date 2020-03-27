import http from '../http-common';

class FoodDataService {
  getAll() {
    return http.get('/food');
  }

  get(id) {
    return http.get(`/food/${id}`);
  }

  create(data) {
    return http.post('/food', data);
  }

  update(id, data) {
    return http.put(`/food/${id}`, data);
  }

  delete(id) {
    return http.delete(`/food/${id}`);
  }

  deleteAll() {
    return http.delete(`/food`);
  }

  findByTitle(title) {
    return http.get(`/food?title=${title}`);
  }

  findByCategory(category) {
    return http.get(`/food?category=${category}`);
  }
}

export default new FoodDataService();
