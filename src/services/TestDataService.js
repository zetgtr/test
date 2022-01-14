import http from "../http-common";

class testDataService {
  getAll() {
    return http.get("/test");
  }
}

export default new testDataService();
