import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shorts',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent {
  shorts = Array.from({ length: 13 }, (_, i) => ({
    name: `Short ${i + 1}`,
    price: 200, // all shorts are 200 KES
    image: `assets/shorts/short${i + 1}.jpeg`,
    images360: [] // placeholder for future 360 images
  }));

  selectedShort: any = null;

  openModal(short: any) {
    this.selectedShort = short;
  }

  closeModal() {
    this.selectedShort = null;
  }
}
