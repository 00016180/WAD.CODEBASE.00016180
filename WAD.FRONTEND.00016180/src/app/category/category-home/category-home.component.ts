import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { Router } from '@angular/router';
import { Category } from '../../types';

@Component({
  selector: 'app-category-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './category-home.component.html',
  styleUrl: './category-home.component.css',
})
export class CategoryHomeComponent {
  TaskTrackerService = inject(ServiceTaskTrackerService);
  router = inject(Router);
  categories: Category[] = [];
  ngOnInit() {
    this.TaskTrackerService.getAllCategories().subscribe((result) => {
      this.categories = result;
    });
  }
  displayedColumns: string[] = [
    'Id',
    'Name',
    'Actions',
  ];
  EditClicked(categoryId: number) {
    this.router.navigateByUrl('/category-edit/' + categoryId);
  }
  DetailsClicked(categoryId: number) {
    this.router.navigateByUrl('/category-details/' + categoryId);
  }
  DeleteClicked(categoryId: number) {
    this.router.navigateByUrl('/category-delete/' + categoryId);
  }
  CreateClicked() {
    this.router.navigateByUrl('/category-create');
  }
}
