import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise15Page } from './exercise15.page';

describe('Exercise15Page', () => {
  let component: Exercise15Page;
  let fixture: ComponentFixture<Exercise15Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
