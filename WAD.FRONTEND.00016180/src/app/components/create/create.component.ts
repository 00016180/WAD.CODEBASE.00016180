import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Category } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  TaskTrackerService = inject(ServiceTaskTrackerService);
  router = inject(Router);
  categories: any = [];
  categoryId: number = 0;
  createTask: any = {
    title: '',
    notes: '',
    categoryId: 0,
    dueDate: '',
    enteredDate: new Date(),
    isCompleted: false,
  };

  ngOnInit() {
    this.TaskTrackerService.getAllCategories().subscribe(
      (result) => (this.categories = result)
    );
  }
  cancel() {
    this.router.navigateByUrl('home');
  }
  create() {
    if (this.createTask.dueDate) {
      const selectedDate = new Date(this.createTask.dueDate);
      this.createTask.dueDate = `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    }
    this.createTask.categoryId = this.categoryId;
    console.log(this.createTask);
    this.TaskTrackerService.create(this.createTask).subscribe((result) => {
      alert('Created Task!');
      this.router.navigateByUrl('home');
    });
  }
}
