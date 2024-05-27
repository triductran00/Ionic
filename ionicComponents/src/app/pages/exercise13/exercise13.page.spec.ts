import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise13Page } from './exercise13.page';

describe('Exercise13Page', () => {
  let component: Exercise13Page;
  let fixture: ComponentFixture<Exercise13Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
