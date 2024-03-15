import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
      ],
    ],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePass: ['', Validators.required],
    }),
  });


  registerHandler(){
    console.log(this.registerForm.value);
    
  }
}
