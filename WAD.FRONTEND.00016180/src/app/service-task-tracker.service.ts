import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category, Task } from './types';

@Injectable({
  providedIn: 'root',
})
export class ServiceTaskTrackerService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllTasks() {
    return this.httpClient.get<Task[]>(
      'https://localhost:5169/api/Task/GetAll'
    );
  }

  getById(taskId: number) {
    return this.httpClient.get<Task>(
      `https://localhost:5169/api/Task/GetById/${taskId}`
    );
  }

  edit(task: Task) {
    return this.httpClient.put('https://localhost:5169/api/Task/Update', task);
  }

  delete(id: number) {
    return this.httpClient.delete(
      `https://localhost:5169/api/Task/Delete/${id}`
    );
  }
  create(task: Task) {
    return this.httpClient.post<Task>(
      'https://localhost:5169/api/Task/Create',
      task
    );
  }

  getAllCategories() {
    return this.httpClient.get<Category[]>(
      'https://localhost:5169/api/Category/GetAll'
    );
  }
}
