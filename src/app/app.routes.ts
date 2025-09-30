import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShortsComponent } from './pages/shorts/shorts.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shorts', component: ShortsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];
