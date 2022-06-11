import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputExComponent } from './input-output-ex.component';

describe('InputOutputExComponent', () => {
  let component: InputOutputExComponent;
  let fixture: ComponentFixture<InputOutputExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
