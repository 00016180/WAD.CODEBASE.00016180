import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-category-edit',
  standalone: true,

  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
    MatInputModule,
  ],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css',
})
export class CategoryEditComponent {
  taskService = inject(ServiceTaskTrackerService);
  activatedroute = inject(ActivatedRoute);
  router = inject(Router);

  editCategory: Category = {
    id: 0,
    name: '',
  };
  selected: any;

  ngOnInit() {
    this.taskService
      .getCategoryById(this.activatedroute.snapshot.params['id'])
      .subscribe((result) => {
        this.editCategory = result;
        console.log(result);
      });
  }
  toHome() {
    this.router.navigateByUrl('category-home');
  }
  edit() {
    this.taskService.editCategory(this.editCategory).subscribe((result) => {
      alert('Updated Category!');
      this.router.navigateByUrl('category-home');
    });
  }
}
