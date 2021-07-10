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
  dropHandler(event): void {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (event.dataTransfer.items) {
      const selectedImg = event.dataTransfer.items[0].type;
      if (selectedImg.indexOf('jpeg') !== -1 || selectedImg.indexOf('png') !== -1 || selectedImg.indexOf('tiff') !== -1) {
        this.imageFileSrc = event.dataTransfer.items[0].getAsFile();
        this.uploadImage = true;
        this.imageFileName = event.dataTransfer.files[0].name;
      }
    }
  }

  dragOverHandler(event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  fileChange(event): void {
    const fileName = event.currentTarget.files[0].name;
    this.imageChangedEvent = event;
    this.uploadImage = true;
    this.imageFileName = fileName;
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }

  saveCroppedImage(): void {
    this.croppedImgDetails.emit([this.croppedImage, this.imageFileName]);
  }

  resetUpload(): void {
    this.uploadImage = false;
  }
}
