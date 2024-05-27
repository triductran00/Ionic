import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise19Page } from './exercise19.page';

describe('Exercise19Page', () => {
  let component: Exercise19Page;
  let fixture: ComponentFixture<Exercise19Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
