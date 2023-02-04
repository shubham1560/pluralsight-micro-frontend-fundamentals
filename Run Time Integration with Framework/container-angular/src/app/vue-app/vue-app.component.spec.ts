import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueAppComponent } from './vue-app.component';

describe('VueAppComponent', () => {
  let component: VueAppComponent;
  let fixture: ComponentFixture<VueAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
