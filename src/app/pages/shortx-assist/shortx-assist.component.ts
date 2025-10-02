import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ChatMessage = { from: 'user' | 'bot'; text: string; typing?: boolean };

@Component({
  selector: 'app-shortx-assist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shortx-assist.component.html',
  styleUrls: ['./shortx-assist.component.css']
})
export class ShortxAssistComponent implements AfterViewChecked {
  userInput: string = '';
  chatMessages: ChatMessage[] = [];

  @ViewChild('chatBox') chatBox!: ElementRef;

  getFashionSuggestion(input: string): string {
    input = input.toLowerCase();
    if (input.includes('hi')) return 'Hi there how can i help you today ';
    if (input.includes('shirt')) return 'Our casual shirts are trending! Check out the blue and white collection.';
    if (input.includes('shorts')) return 'Which type of short do u prefer wearing';
    if (input.includes('jeans')) return 'Skinny or regular fit jeans? We have both in dark and light washes.';
    return 'Check out our latest collection for trendy styles!';
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.chatMessages.push({ from: 'user', text: this.userInput });

    const input = this.userInput;
    this.userInput = '';

    // Add typing message
    const typingMessage: ChatMessage = { from: 'bot', text: 'Typing...', typing: true };
    this.chatMessages.push(typingMessage);

    setTimeout(() => {
      // Remove typing
      const index = this.chatMessages.indexOf(typingMessage);
      if (index > -1) this.chatMessages.splice(index, 1);

      // Add bot response
      const response = this.getFashionSuggestion(input);
      this.chatMessages.push({ from: 'bot', text: response });
    }, 1500 + Math.random() * 1500);
  }

  // Auto-scroll after view updates
  ngAfterViewChecked() {
    if (this.chatBox) {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    }
  }
}
