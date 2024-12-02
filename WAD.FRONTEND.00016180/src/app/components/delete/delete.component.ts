import { Component, inject } from '@angular/core';
import { Task } from '../../types';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  router = inject(Router);
  deleteTask: Task = {
    id: 0,
    title: '',
    notes: '',
    categoryId: 0,
    category: {
      id: 0,
      name: '',
    },
    isCompleted: false,
    dueDate: '',
    enteredDate: new Date(),
  };
  serviceTask = inject(ServiceTaskTrackerService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.serviceTask
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.deleteTask = resultedItem;
        console.log(resultedItem);
      });
  }
  formatDate(date: string | Date): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    return parsedDate.toDateString();
  }
  toHome() {
    this.router.navigateByUrl('home');
  }
  delete() {
    this.serviceTask.delete(this.deleteTask.id).subscribe((result) => {
      alert('Deleted Task!');
      this.router.navigateByUrl('home');
    });
  }
}
