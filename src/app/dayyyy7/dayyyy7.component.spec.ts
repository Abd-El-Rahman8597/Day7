import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dayyyy7Component } from './dayyyy7.component';

describe('Dayyyy7Component', () => {
  let component: Dayyyy7Component;
  let fixture: ComponentFixture<Dayyyy7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dayyyy7Component]
    });
    fixture = TestBed.createComponent(Dayyyy7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
