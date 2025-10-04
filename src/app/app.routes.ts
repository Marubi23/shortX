import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShortsComponent } from './pages/shorts/shorts.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { VendorsComponent } from './pages/vendors/vendors.component'; // ✅ Vendors page import

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: ShortsComponent },
  { path: 'cart', component: CartComponent },
  { 
    path: 'shortx-assist', 
    loadComponent: () => import('./pages/shortx-assist/shortx-assist.component')
      .then(m => m.ShortxAssistComponent)
  },
  { path: 'shop', component: ShopComponent },
  { path: 'vendors', component: VendorsComponent }, // ✅ New vendors route
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' } // fallback
];
