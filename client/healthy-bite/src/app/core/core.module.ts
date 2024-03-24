import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AuthenticateComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, AuthenticateComponent],
})
export class CoreModule {}
