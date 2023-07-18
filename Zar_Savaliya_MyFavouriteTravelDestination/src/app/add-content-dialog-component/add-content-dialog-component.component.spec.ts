import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentDialogComponentComponent } from './add-content-dialog-component.component';

describe('AddContentDialogComponentComponent', () => {
  let component: AddContentDialogComponentComponent;
  let fixture: ComponentFixture<AddContentDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContentDialogComponentComponent]
    });
    fixture = TestBed.createComponent(AddContentDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
