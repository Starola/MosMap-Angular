import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photoUpload',
  templateUrl: './photoUpload.component.html',
  styleUrls: ['./photoUpload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  @Input() locationId: number;
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  constructor() { }

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
  }

}
