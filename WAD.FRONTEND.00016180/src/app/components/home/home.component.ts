import { Component, inject } from '@angular/core';
import { Task } from '../../types';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  TaskTrackerService = inject(ServiceTaskTrackerService);
  router = inject(Router);
  tasks: Task[] = [];
  ngOnInit() {
    this.TaskTrackerService.getAllTasks().subscribe((result) => {
      this.tasks = result;
    });
  }
  displayedColumns: string[] = [
    'Id',
    'Status',
    'Title',
    'Notes',
    'Category Name',
    'Entered Date',
    'Due Date',
    'Actions',
  ];
  formatDate(date: string | Date): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    return parsedDate.toDateString();
  }
  EditClicked(taskId: number) {
    console.log(taskId, 'Edit');
    this.router.navigateByUrl('/edit/' + taskId);
  }
  DetailsClicked(taskId: number) {
    console.log(taskId, 'Details');
    this.router.navigateByUrl('/details/' + taskId);
  }
  DeleteClicked(taskId: number) {
    console.log(taskId, 'Delete');
    this.router.navigateByUrl('/delete/' + taskId);
  }
  CreateClicked() {
    console.log('Create');
    this.router.navigateByUrl('/create');
  }
}
