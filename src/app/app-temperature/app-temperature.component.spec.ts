import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTemperatureComponent } from './app-temperature.component';

describe('AppTemperatureComponent', () => {
  let component: AppTemperatureComponent;
  let fixture: ComponentFixture<AppTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
