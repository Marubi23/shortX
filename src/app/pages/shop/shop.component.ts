import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Shop {
  id: number;
  name: string;
  logo: string;
  category: string;
  verified: boolean;
  rating: number; // 0–5
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  searchQuery: string = '';
  selectedCategory: string = 'all';

  categories: string[] = ['Fashion', 'Electronics', 'Food', 'Books', 'Services', 'Grocery', 'Beauty', 'Health', 'Drinks and Beverages', 'Second hand sellers', 'Lifestyle'];

  shops: Shop[] = [
    { id: 1, name: 'Campus Threads', logo: 'assets/shops/fashion shop.jpeg', category: 'Fashion', verified: true, rating: 4.5 },
    { id: 2, name: 'Trendy Closet', logo: 'assets/shops/trendy closet.jpeg', category: 'Fashion', verified: true, rating: 4.0 },
    { id: 3, name: 'Style Corner', logo: 'assets/shops/shoe shop.jpeg', category: 'Fashion', verified: false, rating: 3.5 },
    { id: 4, name: 'Urban Wear', logo: 'assets/shops/go fashion.jpeg', category: 'Fashion', verified: true, rating: 4.8 },
    { id: 5, name: 'Second Best', logo: 'assets/shops/second hand sellers.jpeg', category: 'Second hand sellers', verified: false, rating: 3.2 },
    { id: 6, name: 'Medics+', logo: 'assets/shops/chemist shop.jpeg', category: 'Health', verified: true, rating: 4.7 },

    { id: 7, name: 'Tech Shop', logo: 'assets/shops/Tech shop.jpeg', category: 'Electronics', verified: true, rating: 4.6 },
    { id: 8, name: 'Coffee Cafe', logo: 'assets/shops/coffee shop.jpeg', category: 'Food', verified: false, rating: 3.9 },
    { id: 9, name: 'Hair Care+', logo: 'assets/shops/domatologist.jpeg', category: 'Beauty', verified: true, rating: 4.1 },
    { id: 10, name: 'Phone Hub', logo: 'assets/shops/phone shop.jpeg', category: 'Electronics', verified: true, rating: 4.3 },
    { id: 11, name: 'Pork Center', logo: 'assets/shops/pork shop.jpeg', category: 'Food', verified: false, rating: 3.7 },

    { id: 12, name: 'Foodie Hub', logo: 'assets/shops/food shop.jpeg', category: 'Food', verified: true, rating: 4.4 },
    { id: 13, name: 'Chafua', logo: 'assets/shops/chapati zone.jpeg', category: 'Food', verified: false, rating: 3.8 },
    { id: 14, name: 'Mama Mboga', logo: 'assets/shops/mama mboga.jpeg', category: 'Grocery', verified: true, rating: 4.9 },
    { id: 15, name: 'Campus Grill', logo: 'assets/shops/grill shop.jpeg', category: 'Food', verified: true, rating: 4.2 },
    { id: 16, name: 'BarberX', logo: 'assets/shops/barber shop.jpeg', category: 'Lifestyle', verified: false, rating: 3.6 },

    { id: 17, name: 'BookSmart', logo: 'assets/shops/stationary shop.jpeg', category: 'Books', verified: true, rating: 4.8 },
    { id: 18, name: 'One Stop Chicken', logo: 'assets/shops/chicken shop.jpeg', category: 'Food', verified: false, rating: 3.9 },
    { id: 19, name: 'One Stop Butchery', logo: 'assets/shops/butchery shop.jpeg', category: 'Food', verified: true, rating: 4.0 },
    { id: 20, name: 'Smoothee', logo: 'assets/shops/smoothy shop.jpeg', category: 'Drinks and Beverages', verified: true, rating: 4.7 },

    { id: 21, name: 'Fix-It Services', logo: 'assets/shops/phone repair.jpeg', category: 'Services', verified: true, rating: 4.5 },
    { id: 22, name: 'Laundry Pro', logo: 'assets/shops/laundry shop.jpeg', category: 'Services', verified: true, rating: 4.6 },
    { id: 23, name: 'Print & Copy', logo: 'assets/shops/printing shop.jpeg', category: 'Services', verified: false, rating: 3.8 },
    { id: 24, name: 'Salon & Beauty', logo: 'assets/shops/salon shop.jpeg', category: 'Services', verified: true, rating: 4.3 },
    { id: 25, name: 'Campus Movers', logo: 'assets/shops/movers shop.jpeg', category: 'Services', verified: true, rating: 4.4 }
  ];

  get filteredShops(): Shop[] {
    return this.shops.filter(shop => {
      const matchesSearch = shop.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || shop.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars: string[] = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
    if (halfStar) stars.push('half');
    while (stars.length < 5) {
      stars.push('empty');
    }
    return stars;
  }
}
