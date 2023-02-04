import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAppComponent } from './react-app.component';

describe('ReactAppComponent', () => {
  let component: ReactAppComponent;
  let fixture: ComponentFixture<ReactAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
