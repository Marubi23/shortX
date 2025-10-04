import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Vendor {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  verified: boolean;
  rating: number; // 0–5
  icon: string;   // Bootstrap icon for category
}

@Component({
  selector: 'app-vendors',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {
  searchQuery: string = '';
  selectedCategory: string = 'all';

  categories: { name: string; icon: string }[] = [
    { name: 'Food', icon: 'bi-cup-straw' },
    { name: 'Stationery', icon: 'bi-journal-text' },
    { name: 'Electronics', icon: 'bi-phone' },
    { name: 'Apparel', icon: 'bi-person-bounding-box' },
    { name: 'Services', icon: 'bi-tools' }
  ];

  vendors: Vendor[] = [
    { id: 1, name: 'Cafe Mocha', description: 'Best coffee and snacks on campus.', category: 'Food', image: 'assets/vendors/vendor1.jpg', verified: true, rating: 4.5, icon: 'bi-cup-straw' },
    { id: 2, name: 'Book Haven', description: 'Stationery and textbooks at student-friendly prices.', category: 'Stationery', image: 'assets/vendors/vendor2.jpg', verified: true, rating: 4.2, icon: 'bi-journal-text' },
    { id: 3, name: 'Gadget Hub', description: 'Electronics and gadgets for every student.', category: 'Electronics', image: 'assets/vendors/vendor3.jpg', verified: true, rating: 4.7, icon: 'bi-phone' },
    { id: 4, name: 'Campus Threads', description: 'Trendy apparel for university life.', category: 'Apparel', image: 'assets/vendors/vendor4.jpg', verified: false, rating: 4.0, icon: 'bi-person-bounding-box' },
    { id: 5, name: 'Quick Print', description: 'Printing and copying services.', category: 'Services', image: 'assets/vendors/vendor5.jpg', verified: true, rating: 4.4, icon: 'bi-tools' }
  ];

  get filteredVendors(): Vendor[] {
    return this.vendors.filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || vendor.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars: string[] = [];
    for (let i = 0; i < fullStars; i++) stars.push('full');
    if (halfStar) stars.push('half');
    while (stars.length < 5) stars.push('empty');
    return stars;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
