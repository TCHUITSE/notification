import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnenotificationComponent } from './onenotification.component';

describe('OnenotificationComponent', () => {
  let component: OnenotificationComponent;
  let fixture: ComponentFixture<OnenotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnenotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
