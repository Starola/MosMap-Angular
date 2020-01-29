import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { Photo } from 'src/app/_models/Photo';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-photoUpload',
  templateUrl: './photoUpload.component.html',
  styleUrls: ['./photoUpload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  @Input() locationId: number;
  @Output() newPhoto: EventEmitter<Photo> = new EventEmitter<Photo>();

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  photo: Photo;

  constructor(
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.initialiseUploader();
  }

  fileOverBase(e:any): void {
    this.hasBaseDropZoneOver = e;
  }

  initialiseUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'loc/' + this.locationId + '/photos',
      authToken: 'Bearer' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};
  
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photo = photo;
        this.alertify.success("Bild erfolgreich hinzugefügt");
        this.newPhoto.emit(photo);
      }
    }
  }
}
