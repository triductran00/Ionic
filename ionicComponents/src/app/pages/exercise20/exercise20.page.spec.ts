import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise20Page } from './exercise20.page';

describe('Exercise20Page', () => {
  let component: Exercise20Page;
  let fixture: ComponentFixture<Exercise20Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
