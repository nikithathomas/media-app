import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageComponent } from '../upload-image/upload-image.component';

@Component({
  selector: 'app-upload-image-parent',
  templateUrl: './upload-image-parent.component.html',
  styleUrls: ['./upload-image-parent.component.scss']
})
export class UploadImageParentComponent implements OnInit {
  imageSrc: string;
  imageFileName: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(): void {
    const uploadImageModal = this.modalService.open(UploadImageComponent, { size: 'xl' });
    uploadImageModal.componentInstance.croppedImgDetails.subscribe((data: Array<any>) => {
      this.imageSrc = data[0];
      this.imageFileName = data[1];
      uploadImageModal.close();
    });
  }
}
