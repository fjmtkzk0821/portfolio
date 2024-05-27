import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSectionComponent } from './block-section.component';

describe('BlockSectionComponent', () => {
  let component: BlockSectionComponent;
  let fixture: ComponentFixture<BlockSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
