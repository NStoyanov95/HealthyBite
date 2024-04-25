import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BLogThemeResponse } from 'src/app/types/blog';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes: BLogThemeResponse[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadAllThemes();
  }

  loadAllThemes(): void {
    this.blogService.getAll().subscribe((data) => {
      this.themes = data;
      console.log(this.themes);
    });
  }
}
