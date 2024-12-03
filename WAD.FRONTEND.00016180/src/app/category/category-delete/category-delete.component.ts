import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../types';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-category-delete',
  standalone: true,
    
    imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule],
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent {
  router = inject(Router);
  deleteCategory: Category = {
    id: 0,
    name: '',
  };
  serviceTask = inject(ServiceTaskTrackerService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.serviceTask
      .getCategoryById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.deleteCategory = resultedItem;
        console.log(resultedItem);
      });
  }
  toHome() {
    this.router.navigateByUrl('category-home');
  }
  delete() {
    this.serviceTask.deleteCategory(this.deleteCategory.id).subscribe((result) => {
      alert('Deleted Category!');
      this.router.navigateByUrl('category-home');
    });
  }
}
