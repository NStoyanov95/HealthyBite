import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class MainModule { }
