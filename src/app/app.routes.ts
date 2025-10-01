import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShortsComponent } from './pages/shorts/shorts.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShortxAssistComponent } from './pages/shortx-assist/shortx-assist.component'; 
import { ContactComponent } from './pages/contact/contact.component';

// New imports
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shorts', component: ShortsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shortx-assist', component: ShortxAssistComponent },
  { path: 'contact', component: ContactComponent },

  // New auth routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: '**', redirectTo: '' } // fallback
];
