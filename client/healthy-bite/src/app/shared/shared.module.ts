import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ContactUsInfoComponent } from './contact-us-info/contact-us-info.component';
import { HomeImageComponent } from './home-image/home-image.component';

@NgModule({
  declarations: [SocialMediaIconsComponent, ContactUsInfoComponent, HomeImageComponent],
  imports: [CommonModule],
  exports: [SocialMediaIconsComponent, ContactUsInfoComponent, HomeImageComponent],
})
export class SharedModule {}
