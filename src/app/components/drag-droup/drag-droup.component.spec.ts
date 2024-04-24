import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDroupComponent } from './drag-droup.component';

describe('DragDroupComponent', () => {
  let component: DragDroupComponent;
  let fixture: ComponentFixture<DragDroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
