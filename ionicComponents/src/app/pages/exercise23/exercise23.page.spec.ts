import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise23Page } from './exercise23.page';

describe('Exercise23Page', () => {
  let component: Exercise23Page;
  let fixture: ComponentFixture<Exercise23Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
