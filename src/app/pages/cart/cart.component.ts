import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { CartService, Short } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  previewedItem: Short | null = null;

  constructor(public cartService: CartService) {}

  get cart(): Short[] {
    return this.cartService.getCartItems();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  removeItem(item: Short) {
    this.cartService.removeFromCart(item);
  }

  updateQty(item: Short, qty: number) {
    this.cartService.updateQuantity(item, qty);
  }

  previewItem(item: Short) {
    this.previewedItem = item;
  }

  closePreview() {
    this.previewedItem = null;
  }
}
