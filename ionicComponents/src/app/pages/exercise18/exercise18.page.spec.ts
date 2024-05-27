import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise18Page } from './exercise18.page';

describe('Exercise18Page', () => {
  let component: Exercise18Page;
  let fixture: ComponentFixture<Exercise18Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
