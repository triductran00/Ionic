import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage8Page } from './sample-page8.page';

describe('SamplePage8Page', () => {
  let component: SamplePage8Page;
  let fixture: ComponentFixture<SamplePage8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
