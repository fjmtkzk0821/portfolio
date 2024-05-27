import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemDefaultComponent } from './work-item-default.component';

describe('WorkItemDefaultComponent', () => {
  let component: WorkItemDefaultComponent;
  let fixture: ComponentFixture<WorkItemDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WorkItemDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkItemDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
