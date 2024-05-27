import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise12Page } from './exercise12.page';

describe('Exercise12Page', () => {
  let component: Exercise12Page;
  let fixture: ComponentFixture<Exercise12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
