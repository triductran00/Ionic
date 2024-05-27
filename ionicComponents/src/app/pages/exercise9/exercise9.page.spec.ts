import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise9Page } from './exercise9.page';

describe('Exercise9Page', () => {
  let component: Exercise9Page;
  let fixture: ComponentFixture<Exercise9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
