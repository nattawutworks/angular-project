import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFromComponent } from './success-from.component';

describe('SuccessFromComponent', () => {
  let component: SuccessFromComponent;
  let fixture: ComponentFixture<SuccessFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
