import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage4Page } from './sample-page4.page';

describe('SamplePage4Page', () => {
  let component: SamplePage4Page;
  let fixture: ComponentFixture<SamplePage4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
