import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise6Page } from './exercise6.page';

describe('Exercise6Page', () => {
  let component: Exercise6Page;
  let fixture: ComponentFixture<Exercise6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
