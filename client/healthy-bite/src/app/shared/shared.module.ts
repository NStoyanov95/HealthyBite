import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ContactUsInfoComponent } from './contact-us-info/contact-us-info.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { CatalogBtnComponent } from './catalog-btn/catalog-btn.component';

@NgModule({
  declarations: [SocialMediaIconsComponent, ContactUsInfoComponent, HomeImageComponent, CatalogBtnComponent],
  imports: [CommonModule],
  exports: [SocialMediaIconsComponent, ContactUsInfoComponent, HomeImageComponent, CatalogBtnComponent],
})
export class SharedModule {}
