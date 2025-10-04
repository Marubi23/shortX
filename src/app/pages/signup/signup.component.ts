import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step = 1;
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  nextStep() {
    if (this.step === 1 && this.name && this.email) {
      this.step = 2;
    } else if (this.step === 2 && this.password) {
      this.step = 3;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup data:', {
      name: this.name,
      email: this.email,
      password: this.password
    });

    // TODO: Call AuthService signup API here
  }
}
