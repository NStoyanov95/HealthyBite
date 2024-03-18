import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/shared/validators/password-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
      ],
    ],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePass: ['', Validators.required],
      },
      {
        validators: [passwordMatchValidator('password', 'rePass')],
      }
    ),
  });

  registerHandler() {
    const email = this.registerForm.get('email')?.value;
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('passGroup.password')?.value;
    const rePass = this.registerForm.get('passGroup.rePass')?.value;

    if (this.registerForm.invalid) {
      return;
    }

    this.authService
      .register(email!, username!, password!, rePass!)
      .subscribe((data) => {
        const { _id, email, username, accessToken } = data;

        localStorage.setItem('_id', JSON.stringify(_id));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('username', JSON.stringify(username));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
      });

    this.router.navigate(['/']);
  }
}
