import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.signup({ name: this.name, email: this.email, password: this.password });
    this.router.navigate(['/']);
  }
}
