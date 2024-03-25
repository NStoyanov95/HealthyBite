import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ContactUsInfoComponent } from './contact-us-info/contact-us-info.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { CatalogBtnComponent } from './catalog-btn/catalog-btn.component';
import { LastThreeRecipesComponent } from './last-three-recipres/last-three-recipes.component';
import { RouterModule } from '@angular/router';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  declarations: [
    SocialMediaIconsComponent,
    ContactUsInfoComponent,
    HomeImageComponent,
    CatalogBtnComponent,
    LastThreeRecipesComponent,
    ErrorMsgComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SocialMediaIconsComponent,
    ContactUsInfoComponent,
    HomeImageComponent,
    CatalogBtnComponent,
    LastThreeRecipesComponent,
    ErrorMsgComponent,
  ],
})
export class SharedModule {}
