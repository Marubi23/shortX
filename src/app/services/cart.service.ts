import { Injectable } from '@angular/core';

export interface Short {
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Short[] = [];

  addToCart(short: Short) {
    const existing = this.cart.find(item => item.name === short.name);
    if (existing) {
      existing.quantity! += 1;
    } else {
      this.cart.push({ ...short, quantity: 1 });
    }
  }

  removeFromCart(short: Short) {
    this.cart = this.cart.filter(item => item.name !== short.name);
  }

  updateQuantity(short: Short, qty: number) {
    const item = this.cart.find(i => i.name === short.name);
    if (item) item.quantity = qty;
  }

  getCartItems(): Short[] {
    return this.cart;
  }

  getCartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }
}
