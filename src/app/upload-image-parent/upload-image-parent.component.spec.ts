import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageParentComponent } from './upload-image-parent.component';

describe('UploadImageParentComponent', () => {
  let component: UploadImageParentComponent;
  let fixture: ComponentFixture<UploadImageParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImageParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
