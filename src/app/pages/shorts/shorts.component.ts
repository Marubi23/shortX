import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Short } from '../../services/cart.service';

@Component({
  selector: 'app-shorts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
  shorts: Short[] = [
    { name: 'Short1', price: 200, image: 'assets/shorts/short1.jpeg' },
    { name: 'Short2', price: 200, image: 'assets/shorts/short2.jpeg' },
    { name: 'Short3', price: 200, image: 'assets/shorts/short3.jpeg' },
    { name: 'Short4', price: 200, image: 'assets/shorts/short4.jpeg' },
    { name: 'Short5', price: 200, image: 'assets/shorts/short5.jpeg' },
    { name: 'Short6', price: 200, image: 'assets/shorts/short6.jpeg' },
    { name: 'Short7', price: 200, image: 'assets/shorts/short7.jpeg' },
    { name: 'Short8', price: 200, image: 'assets/shorts/short8.jpeg' }
  ];

  cartItems: Short[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to cart changes to track added items
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  addToCart(short: Short) {
    this.cartService.addToCart(short);
  }

  isAdded(short: Short): boolean {
    return this.cartItems.some(item => item.name === short.name);
  }
}
