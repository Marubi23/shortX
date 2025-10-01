import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  signup(user: { name: string; email: string; password: string }) {
    this.currentUser = user; // stores in memory
    console.log('User signed up:', this.currentUser);
  }

  login(email: string, password: string) {
    if (this.currentUser && this.currentUser.email === email && this.currentUser.password === password) {
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  logout() {
    this.currentUser = null;
  }

  getUser() {
    return this.currentUser;
  }
}
