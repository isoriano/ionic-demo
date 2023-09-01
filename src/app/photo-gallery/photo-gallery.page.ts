import { Component, OnInit, inject } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: 'photo-gallery.page.html',
  styleUrls: ['photo-gallery.page.scss'],
})
export class PhotoGalleryPage implements OnInit {
  photoService = inject(PhotoService);

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
