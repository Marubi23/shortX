import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // <- import FormsModule

@Component({
  selector: 'app-signup',
  standalone: true, // mark as standalone
  imports: [FormsModule], // <- include FormsModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.signup({
      name: this.name,
      email: this.email,
      password: this.password
    });

    this.router.navigate(['/']);
  }
}
