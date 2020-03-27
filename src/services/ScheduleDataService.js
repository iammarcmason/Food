import http from '../http-common';

class FoodDataService {
  getAll() {
    return http.get('/schedule');
  }

  get(id) {
    return http.get(`/schedule/${id}`);
  }

  create(data) {
    return http.post('/schedule', data);
  }

  update(id, data) {
    return http.put(`/schedule/${id}`, data);
  }

  delete(id) {
    return http.delete(`/schedule/${id}`);
  }

  deleteAll() {
    return http.delete(`/schedule`);
  }

  findByTitle(title) {
    return http.get(`/schedule?title=${title}`);
  }

  findByCategory(category) {
    return http.get(`/schedule?category=${category}`);
  }
}

export default new FoodDataService();
