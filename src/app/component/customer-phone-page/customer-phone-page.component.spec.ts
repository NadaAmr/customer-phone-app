import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPhonePageComponent } from './customer-phone-page.component';

describe('CustomerPhonePageComponent', () => {
  let component: CustomerPhonePageComponent;
  let fixture: ComponentFixture<CustomerPhonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPhonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
