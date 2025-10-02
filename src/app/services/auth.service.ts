import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string | null>(null);

  isLoggedIn$ = this.loggedIn.asObservable();
  userName$ = this.userName.asObservable();

  login(email: string, password: string): boolean {
    // Replace with real authentication
    if (email && password) {
      this.loggedIn.next(true);
      this.userName.next(email.split('@')[0]); // simple placeholder
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
    this.userName.next(null);
  }

  signup(user: User & { password: string }): void {
    // Replace with real signup logic
    this.loggedIn.next(true);
    this.userName.next(user.name);
  }
}
