import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(5)]],
  });

  loginHandler() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(email!, password!).subscribe((data) => {
      const { _id, email, username, accessToken } = data;

      localStorage.setItem('_id', JSON.stringify(_id));
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('username', JSON.stringify(username));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
    });

    this.router.navigate(['/']);
  }
}
