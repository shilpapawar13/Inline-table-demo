import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCellEditComponent } from './inline-cell-edit.component';

describe('InlineCellEditComponent', () => {
  let component: InlineCellEditComponent;
  let fixture: ComponentFixture<InlineCellEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineCellEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineCellEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
