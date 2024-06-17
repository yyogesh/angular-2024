import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIdComponent } from './about-id.component';

describe('AboutIdComponent', () => {
  let component: AboutIdComponent;
  let fixture: ComponentFixture<AboutIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
