import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/create/create.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryHomeComponent } from './category/category-home/category-home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'category-home',
    component: CategoryHomeComponent,
  },
  {
    path: 'category-edit/:id',
    component: CategoryEditComponent,
  },
  {
    path: 'category-details/:id',
    component: CategoryDetailsComponent,
  },
  {
    path: 'category-delete/:id',
    component: CategoryDeleteComponent,
  },
  {
    path: 'category-create',
    component: CategoryCreateComponent,
  },
];
