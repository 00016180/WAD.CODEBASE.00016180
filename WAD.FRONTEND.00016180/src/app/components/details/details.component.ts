import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Task } from '../../types';
import { ServiceTaskTrackerService } from '../../service-task-tracker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detailsTask: Task = {
    id: 0,
    title: '',
    notes: '',
    categoryId: 0,
    category: {
      id: 0,
      name: '',
    },
    isCompleted: false,
    dueDate: new Date(),
    enteredDate: new Date(),
  };
  serviceTask = inject(ServiceTaskTrackerService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.serviceTask
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailsTask = resultedItem;
        console.log(resultedItem)
      });
  }
  formatDate(date: string | Date): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    return parsedDate.toDateString();
  }
}
