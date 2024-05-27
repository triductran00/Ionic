import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise4Page } from './exercise4.page';

describe('Exercise4Page', () => {
  let component: Exercise4Page;
  let fixture: ComponentFixture<Exercise4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
