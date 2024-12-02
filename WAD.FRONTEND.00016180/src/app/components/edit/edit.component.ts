import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../types';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

function findIndexById(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  taskService = inject(ServiceTaskTrackerService);
  activatedroute = inject(ActivatedRoute);
  router = inject(Router);

  editTask: Task = {
    id: 0,
    title: '',
    notes: '',
    enteredDate: new Date(),
    dueDate: '',
    isCompleted: false,
  };
  categories: any;
  selected: any;
  categoryId: any = 0;

  ngOnInit() {
    this.taskService
      .getById(this.activatedroute.snapshot.params['id'])
      .subscribe((result) => {
        this.editTask = result;
        setTimeout(() => {
          this.categoryId = this.editTask.categoryId;
          this.selected = this.editTask.categoryId;
        });
      });
    this.taskService.getAllCategories().subscribe((result) => {
      this.categories = result;
    });
  }
  toHome() {
    this.router.navigateByUrl('home');
  }
  edit() {
    if (this.editTask.dueDate) {
      const selectedDate = new Date(this.editTask.dueDate);
      this.editTask.dueDate = `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    }
    this.editTask.categoryId = this.categoryId;
    this.editTask.category =
      this.categories[findIndexById(this.categories, this.categoryId)];
    console.log(this.editTask);
    this.taskService.edit(this.editTask).subscribe((result) => {
      alert('Updated Task!');
      this.router.navigateByUrl('home');
    });
  }
}
