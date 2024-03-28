import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string | undefined = undefined;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  loginHandler() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(email!, password!).subscribe({
      next: (data) => {
        this.loginForm.reset();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err.error['error']);
        this.errorMessage = err.error['error'];
      },
    });
  }
}
