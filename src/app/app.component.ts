import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable, map } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  userName$!: Observable<string>;
  cartCount = 0;

  constructor(private authService: AuthService, private cartService: CartService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.userName$ = this.authService.userName$.pipe(map(name => name || 'User'));

    this.cartService.cartItems$.subscribe(items => {
      this.cartCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
    });
  }

  logout() {
    this.authService.logout();
  }
}
