import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from './types';

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
}
