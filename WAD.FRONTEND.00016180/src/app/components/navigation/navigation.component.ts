import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  router = inject(Router);
  CreateClicked() {
    this.router.navigateByUrl('create');
  }
  HomeIconClicked() {
    this.router.navigateByUrl('home');
  }
  CategoryClicked() {
    this.router.navigateByUrl('category-home');
  }
}
