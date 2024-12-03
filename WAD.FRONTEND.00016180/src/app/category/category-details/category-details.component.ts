import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Category } from '../../types';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css',
})
export class CategoryDetailsComponent {
  router = inject(Router);

  detailsCategory: Category = {
    id: 0,
    name: '',
  };
  serviceTask = inject(ServiceTaskTrackerService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.serviceTask
      .getCategoryById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailsCategory = resultedItem;
        console.log(resultedItem);
      });
  }
  toHome() {
    this.router.navigateByUrl('category-home');
  }
}
