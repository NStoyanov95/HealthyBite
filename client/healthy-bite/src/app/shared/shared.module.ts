import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ContactUsInfoComponent } from './contact-us-info/contact-us-info.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { LastThreeRecipesComponent } from './last-three-recipres/last-three-recipes.component';
import { RouterModule } from '@angular/router';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { LoaderComponent } from './loader/loader.component';
import { TrimInputDirective } from './trim-input.directive';

@NgModule({
  declarations: [
    SocialMediaIconsComponent,
    ContactUsInfoComponent,
    HomeImageComponent,
    LastThreeRecipesComponent,
    ErrorMsgComponent,
    LoaderComponent,
    TrimInputDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SocialMediaIconsComponent,
    ContactUsInfoComponent,
    HomeImageComponent,
    LastThreeRecipesComponent,
    ErrorMsgComponent,
    LoaderComponent,
    TrimInputDirective,
  ],
})
export class SharedModule {}
