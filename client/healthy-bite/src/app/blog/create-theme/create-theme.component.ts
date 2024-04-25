import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogTheme } from 'src/app/types/blog';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.css'],
})
export class CreateThemeComponent {
  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {}

  createThemeForm = this.fb.group({
    title: ['', Validators.required],
    imageUrl: ['', Validators.required],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
  });

  createThemeHandler() {
    if (this.createThemeForm.invalid) {
      return;
    }

    const themeData = this.createThemeForm.value as BlogTheme;
    console.log(themeData);

    this.blogService.createTheme(themeData).subscribe({
      next: (data) => {
        this.createThemeForm.reset();
        this.router.navigate(['/blog/themes']);
      },
      error: (err) => {
        alert(`${err.status}: ${err.statusText}`);
      },
    });
  }
}
