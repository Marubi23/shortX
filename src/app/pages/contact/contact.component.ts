import { Component } from '@angular/core';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ correct import

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgForOf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  submitForm() {
    if(this.name && this.email && this.message) {
      this.submitted = true;
      console.log('Contact Form:', {name: this.name, email: this.email, message: this.message});
      // Here you could send it to backend
      this.name = this.email = this.message = '';
    }
  }
}
