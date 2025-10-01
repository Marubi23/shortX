import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShortsComponent } from './pages/shorts/shorts.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShortxAssistComponent } from './pages/shortx-assist/shortx-assist.component'; // your AI assistant
import { ContactComponent } from './pages/contact/contact.component'; // your contact page

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shorts', component: ShortsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shortx-assist', component: ShortxAssistComponent }, // AI assistant route
  { path: 'contact', component: ContactComponent },            // Contact page route
  { path: '**', redirectTo: '' }                                // fallback
];
