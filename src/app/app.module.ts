import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { UploadImageParentComponent } from './upload-image-parent/upload-image-parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
import { EllipsePipe } from './shared/pipes/ellipse-pipe';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    UploadImageParentComponent,
    EllipsePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
