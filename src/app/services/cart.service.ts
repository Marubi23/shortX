import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Short {
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Short[] = [];

  private cartItemsSource = new BehaviorSubject<Short[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  addToCart(short: Short) {
    const existing = this.cart.find(item => item.name === short.name);
    if (existing) {
      existing.quantity! += 1;
    } else {
      this.cart.push({ ...short, quantity: 1 });
    }
    this.cartItemsSource.next([...this.cart]);
  }

  removeFromCart(short: Short) {
    this.cart = this.cart.filter(item => item.name !== short.name);
    this.cartItemsSource.next([...this.cart]);
  }

  updateQuantity(short: Short, qty: number) {
    const item = this.cart.find(i => i.name === short.name);
    if (item) item.quantity = qty;
    this.cartItemsSource.next([...this.cart]);
  }

  getCartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }

  getCartCount(): number {
    return this.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  // ✅ check if short is in cart
  isInCart(short: Short): boolean {
    return this.cart.some(item => item.name === short.name);
  }
}
