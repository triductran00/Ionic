import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage3Page } from './sample-page3.page';

describe('SamplePage3Page', () => {
  let component: SamplePage3Page;
  let fixture: ComponentFixture<SamplePage3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
