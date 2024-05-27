import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeaFoodPagePage } from './sea-food-page.page';

describe('SeaFoodPagePage', () => {
  let component: SeaFoodPagePage;
  let fixture: ComponentFixture<SeaFoodPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeaFoodPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
