import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise21Page } from './exercise21.page';

describe('Exercise21Page', () => {
  let component: Exercise21Page;
  let fixture: ComponentFixture<Exercise21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
