import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise22Page } from './exercise22.page';

describe('Exercise22Page', () => {
  let component: Exercise22Page;
  let fixture: ComponentFixture<Exercise22Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
