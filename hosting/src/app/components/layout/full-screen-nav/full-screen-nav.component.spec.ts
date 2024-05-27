import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenNavComponent } from './full-screen-nav.component';

describe('FullScreenNavComponent', () => {
  let component: FullScreenNavComponent;
  let fixture: ComponentFixture<FullScreenNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
