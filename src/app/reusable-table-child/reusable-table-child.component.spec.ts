import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableChildComponent } from './reusable-table-child.component';

describe('ReusableTableChildComponent', () => {
  let component: ReusableTableChildComponent;
  let fixture: ComponentFixture<ReusableTableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTableChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableTableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
