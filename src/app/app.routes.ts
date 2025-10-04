import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { VendorsComponent } from './pages/vendors/vendors.component'; 
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component'; // ✅ Disclaimer import
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component'; // ✅ Privacy Policy import
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component'; // ✅ Terms of Service import

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { 
    path: 'shortx-assist', 
    loadComponent: () => import('./pages/shortx-assist/shortx-assist.component')
      .then(m => m.ShortxAssistComponent)
  },
  { path: 'shop', component: ShopComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'disclaimer', component: DisclaimerComponent }, // ✅ Disclaimer route
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, // ✅ Privacy Policy route
  { path: 'terms-of-service', component: TermsOfServiceComponent }, // ✅ Terms of Service route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' } // fallback
];
