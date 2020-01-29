import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { LocationDetail } from 'src/app/_models/locationDetail';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() location: LocationDetail;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {
   }

  ngOnInit() {
    this.galleryOptions = [
      {
        fullWidth: false,
        width: '1000px',
        height: '700px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageArrows: true,
        imageSwipe: true,
        imageInfinityMove: true,
        thumbnailsArrowsAutoHide: true,


      },
      {
        breakpoint: 1200,
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '300px',
        thumbnailsColumns: 3,
      },
      // max-width 400
      {
       breakpoint: 400,
        width: '100%',
        height: '200px',
        fullWidth: true,
        thumbnails: false,
      }
                

    ];
  }

  ngOnChanges(changes: SimpleChanges){
    this.galleryImages = this.getImages();
  }
  

  getImages() {
    const imageUrls = [];
    for (const photo of this.location.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }


}
