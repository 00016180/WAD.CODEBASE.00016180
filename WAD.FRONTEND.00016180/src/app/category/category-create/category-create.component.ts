import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css',
})
export class CategoryCreateComponent {
  TaskTrackerService = inject(ServiceTaskTrackerService);
  router = inject(Router);
  createCategory: any = {
    name: '',
  };
  cancel() {
    this.router.navigateByUrl('category-home');
  }
  create() {
    console.log(this.createCategory);
    this.TaskTrackerService.createCategory(this.createCategory).subscribe(
      (result) => {
        alert('Created Category!');
        this.router.navigateByUrl('category-home');
      }
    );
  }
}
