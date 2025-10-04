import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CartService, Short } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
  budget: number = 0;
  filteredProducts: Short[] = [...this.shorts];

  constructor(private cartService: CartService) {}

  ngOnInit() {
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

  filterByBudget() {
    if (this.budget > 0) {
      this.filteredProducts = this.shorts.filter(p => p.price <= this.budget);
      if (this.filteredProducts.length === 0) {
        const cheapest = this.shorts.reduce((min, p) => p.price < min.price ? p : min, this.shorts[0]);
        this.filteredProducts = [cheapest];
      }
    } else {
      this.filteredProducts = [...this.shorts];
    }
  }
}
