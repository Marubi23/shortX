import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ add this
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true, // if using standalone component
  imports: [CommonModule, FormsModule, RouterLink], // ✅ add FormsModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step: number = 1;

  // Step 1
  name: string = '';
  email: string = '';
  role: string = '';

  // Step 2
  password: string = '';
  storeName: string = '';
  storePhone: string = '';

  // Step 3
  confirmPassword: string = '';

  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  onSignup() {
    const userData = {
      name: this.name,
      email: this.email,
      role: this.role,
      password: this.password,
      ...(this.role === 'seller' && { storeName: this.storeName, storePhone: this.storePhone })
    };
    console.log('Signup Data:', userData);
  }
}
