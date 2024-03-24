import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  getUserId(): string {
    return this.userService.user?._id || '';
  }

  logoutHandler() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/users/login']);
      },
    });
  }
}
