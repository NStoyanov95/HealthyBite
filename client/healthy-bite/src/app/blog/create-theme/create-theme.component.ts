import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.css'],
})
export class CreateThemeComponent {
  constructor(private fb: FormBuilder) {}

  createThemeForm = this.fb.group({
    themeTitle: ['', Validators.required],
    themeImage: ['', Validators.required],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
  });

  createThemeHandler() {
    //
  }
}
