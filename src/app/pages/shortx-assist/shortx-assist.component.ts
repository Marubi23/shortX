import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, Short } from '../../services/cart.service';

@Component({
  selector: 'app-shortx-assist',
  standalone: true,
  imports: [CommonModule, FormsModule, NgForOf, NgIf],
  templateUrl: './shortx-assist.component.html',
  styleUrls: ['./shortx-assist.component.css']
})
export class ShortxAssistComponent {
  messages: {from: 'bot' | 'user', text: string, short?: Short}[] = [];
  userInput = '';
  waistSize: number | null = null;
  step = 0;

  // Mocked shorts collection (normally you could import from ShortsComponent)
  shortsCollection: Short[] = Array.from({ length: 5 }, (_, i) => ({
    name: `Short ${i+1}`,
    price: 200 + i*50,
    image: `assets/shorts/short${i+1}.jpeg`,
    quantity: 1
  }));

  constructor(private cartService: CartService) {
    this.botMessage("Hello! I'm ShortX Assist 🤖. What's your waist size in cm?");
  }

  botMessage(text: string, short?: Short) {
    this.messages.push({from: 'bot', text, short});
  }

  userMessage(text: string) {
    this.messages.push({from: 'user', text});
  }

  send() {
    if(!this.userInput.trim()) return;

    this.userMessage(this.userInput);

    if(this.step === 0) {
      const size = Number(this.userInput);
      if(isNaN(size) || size <= 0) {
        this.botMessage("Hmm, that doesn't look like a valid number. Please enter waist size in cm.");
      } else {
        this.waistSize = size;
        this.botMessage(`Great! Waist size set to ${size}cm. Let me suggest some shorts for you:`);

        // Suggest shorts based on waist size (mock logic: show all for now)
        this.shortsCollection.forEach(short => {
          this.botMessage(`I recommend ${short.name}`, short);
        });

        this.step = 1;
      }
    }

    this.userInput = '';
  }

  addToCart(short: Short) {
    this.cartService.addToCart(short);
  }
}
