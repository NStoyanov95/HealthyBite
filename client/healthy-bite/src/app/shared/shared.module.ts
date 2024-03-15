import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ContactUsInfoComponent } from './contact-us-info/contact-us-info.component';

@NgModule({
  declarations: [SocialMediaIconsComponent, ContactUsInfoComponent],
  imports: [CommonModule],
  exports: [SocialMediaIconsComponent],
})
export class SharedModule {}
