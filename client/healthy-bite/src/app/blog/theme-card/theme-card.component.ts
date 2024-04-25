import { Component, Input } from '@angular/core';
import { BLogThemeResponse } from 'src/app/types/blog';

@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.css'],
})
export class ThemeCardComponent {
  @Input() theme: BLogThemeResponse | undefined;
}
