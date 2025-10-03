import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';   // 👈 import this

interface Shop {
  id: number;
  name: string;
  logo: string;
  category: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],  // 👈 add RouterLink here
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  searchQuery: string = '';
  selectedCategory: string = 'all';

  categories: string[] = ['Fashion', 'Electronics', 'Food', 'Books', 'Services'];

  shops: Shop[] = [
    { id: 1, name: 'Campus Threads', logo: 'assets/shops/fashion shop.jpeg', category: 'Fashion' },
    { id: 2, name: 'Tech shop', logo: 'assets/shops/Tech shop.jpeg', category: 'Electronics' },
    { id: 3, name: 'Foodie Hub', logo: 'assets/shops/food shop.jpeg', category: 'Food' },
    { id: 4, name: 'BookSmart', logo: 'assets/shops/stationary shop.jpeg', category: 'Books' },
    { id: 5, name: 'Fix-It Services', logo: 'assets/shops/phone repair.jpeg', category: 'Services' }
  ];

  get filteredShops(): Shop[] {
    return this.shops.filter(shop => {
      const matchesSearch = shop.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || shop.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
