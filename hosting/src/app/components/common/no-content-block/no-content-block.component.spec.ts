import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoContentBlockComponent } from './no-content-block.component';

describe('NoContentBlockComponent', () => {
  let component: NoContentBlockComponent;
  let fixture: ComponentFixture<NoContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoContentBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
