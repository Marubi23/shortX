import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shortx-assist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shortx-assist.component.html',
  styleUrls: ['./shortx-assist.component.css']
})
export class ShortxAssistComponent {
  userInput: string = '';
  chatMessages: { from: 'user' | 'bot', text: string }[] = [];

  // Simple mock AI function
  getFashionSuggestion(input: string): string {
    input = input.toLowerCase();
    if(input.includes('dress')) return 'Try our red and black dresses, perfect for evening events!';
    if(input.includes('shirt')) return 'Our casual shirts are trending! Check out the blue and white collection.';
    if(input.includes('shorts')) return 'We have comfy summer shorts in various colors.';
    if(input.includes('jeans')) return 'Skinny or regular fit jeans? We have both in dark and light washes.';
    return 'Check out our latest collection for trendy styles!';
  }

  sendMessage() {
    if(!this.userInput.trim()) return;

    // Push user message
    this.chatMessages.push({ from: 'user', text: this.userInput });

    // Push bot response
    const response = this.getFashionSuggestion(this.userInput);
    this.chatMessages.push({ from: 'bot', text: response });

    // Clear input
    this.userInput = '';
  }
}
