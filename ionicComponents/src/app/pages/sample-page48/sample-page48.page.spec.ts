import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage48Page } from './sample-page48.page';

describe('SamplePage48Page', () => {
  let component: SamplePage48Page;
  let fixture: ComponentFixture<SamplePage48Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage48Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
