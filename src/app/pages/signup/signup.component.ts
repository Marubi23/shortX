import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step = 1;           // current step
  role = '';           // 'buyer' or 'seller'
  sellerType = '';     // 'online' or 'shop'

  // Buyer fields
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  // Seller fields
  storeName = '';
  storePhone = '';

  // Guide modal
  showGuide = false;

  selectRole(role: string) {
    this.role = role;
    this.nextStep();
  }

  selectSellerType(type: string) {
    this.sellerType = type;
  }

  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  toggleGuide() {
    this.showGuide = !this.showGuide;
  }

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Replace with API call
    console.log({
      role: this.role,
      sellerType: this.sellerType,
      name: this.name,
      email: this.email,
      password: this.password,
      storeName: this.storeName,
      storePhone: this.storePhone
    });
    alert('Signup successful!');
  }
}
