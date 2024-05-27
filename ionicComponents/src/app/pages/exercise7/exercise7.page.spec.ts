import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise7Page } from './exercise7.page';

describe('Exercise7Page', () => {
  let component: Exercise7Page;
  let fixture: ComponentFixture<Exercise7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
