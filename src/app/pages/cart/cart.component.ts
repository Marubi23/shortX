import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Short } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Short[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe((items: Short[]) => this.cartItems = items);
  }

  removeItem(short: Short) {
    this.cartService.removeFromCart(short);
  }

  updateQty(short: Short, qty: number) {
    this.cartService.updateQuantity(short, qty);
  }

  getTotal(): number {
    return this.cartService.getCartTotal();
  }
}
