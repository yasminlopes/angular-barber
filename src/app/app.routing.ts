import { Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';

export const HomeRota: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'nao-encontrado',
    loadChildren: () => import('./layout/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '/nao-encontrado',
  }

];
