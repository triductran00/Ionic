import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage1Page } from './sample-page1.page';

describe('SamplePage1Page', () => {
  let component: SamplePage1Page;
  let fixture: ComponentFixture<SamplePage1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
