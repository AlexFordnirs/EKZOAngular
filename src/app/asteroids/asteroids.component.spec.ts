import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsComponent } from './asteroids.component';

describe('AsteroidsComponent', () => {
  let component: AsteroidsComponent;
  let fixture: ComponentFixture<AsteroidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsteroidsComponent]
    });
    fixture = TestBed.createComponent(AsteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
