import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { CartService, Short } from '../../services/cart.service';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shorts',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf, CurrencyPipe, RouterModule, RouterLink],
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent {
  shorts: Short[] = Array.from({ length: 13 }, (_, i) => ({
    name: `Short ${i + 1}`,
    price: 200,
    image: `assets/shorts/short${i + 1}.jpeg`,
    quantity: 1
  }));

  constructor(public cartService: CartService) {}

  // Add to cart
  addToCart(short: Short) {
    this.cartService.addToCart(short);
  }

  // Check if the short is already in the cart
  isInCart(short: Short): boolean {
    return this.cartService.getCartItems().some(item => item.name === short.name);
  }
}
