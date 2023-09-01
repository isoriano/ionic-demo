import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoGalleryPage } from './photo-gallery.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PhotoGalleryPageRoutingModule } from './photo-gallery-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PhotoGalleryPageRoutingModule
  ],
  declarations: [PhotoGalleryPage]
})
export class PhotoGalleryPageModule {}
