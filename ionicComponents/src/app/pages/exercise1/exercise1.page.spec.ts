import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise1Page } from './exercise1.page';

describe('Exercise1Page', () => {
  let component: Exercise1Page;
  let fixture: ComponentFixture<Exercise1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
