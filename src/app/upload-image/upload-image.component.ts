import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageFileSrc;
  uploadImage = false;
  imageFileName = '';
  @Output() croppedImgDetails = new EventEmitter<Array<any>>();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  // To get file data when uploaded via drag and drop
  dropHandler(event): void {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (event.dataTransfer.items) {
      const selectedImg = event.dataTransfer.items[0].type;
      // Checking whether the image is of this specific extension
      if (selectedImg.indexOf('jpeg') !== -1 || selectedImg.indexOf('png') !== -1 || selectedImg.indexOf('tiff') !== -1) {
        this.imageFileSrc = event.dataTransfer.items[0].getAsFile();
        this.uploadImage = true;
        this.imageFileName = event.dataTransfer.files[0].name;
      }
    }
  }

  // To prevent further events from executing like touch events
  dragOverHandler(event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  // To obtain file data when uploaded with file input
  fileChange(event): void {
    const fileName = event.currentTarget.files[0].name;
    this.imageChangedEvent = event;
    this.uploadImage = true;
    this.imageFileName = fileName;
  }

  // Assigning the image to be cropped
  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }

  // Emitting the cropped image details to the parent
  saveCroppedImage(): void {
    this.croppedImgDetails.emit([this.croppedImage, this.imageFileName]);
  }

  // Resetting the upload page
  resetUpload(): void {
    this.uploadImage = false;
  }
}
