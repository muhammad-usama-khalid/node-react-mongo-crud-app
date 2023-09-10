import http from "../http-common";
import ITutorialData from "../types/tutorial.type"

class TutorialDataService {
  getAll(params:any) {
    return http.get("/tutorials", { params });
  }


  get(id: string) {
    return http.get<ITutorialData>(`/tutorials/${id}`);
  }

  create(data: ITutorialData) {
    return http.post<ITutorialData>("/tutorials", data);
  }

  update(data: ITutorialData, id: any) {
    return http.put<any>(`/tutorials/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/tutorials`);
  }

  findByTitle(title: string) {
    return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
  }
}

const tutorialService = new TutorialDataService()

export default tutorialService;