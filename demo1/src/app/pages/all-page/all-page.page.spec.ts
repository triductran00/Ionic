import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPagePage } from './all-page.page';

describe('AllPagePage', () => {
  let component: AllPagePage;
  let fixture: ComponentFixture<AllPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
