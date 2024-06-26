import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByExampleComponent } from './track-by-example.component';

describe('TrackByExampleComponent', () => {
  let component: TrackByExampleComponent;
  let fixture: ComponentFixture<TrackByExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackByExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackByExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
