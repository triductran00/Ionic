import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastFoodPagePage } from './fast-food-page.page';

describe('FastFoodPagePage', () => {
  let component: FastFoodPagePage;
  let fixture: ComponentFixture<FastFoodPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FastFoodPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
