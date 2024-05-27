import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage13Page } from './sample-page13.page';

describe('SamplePage13Page', () => {
  let component: SamplePage13Page;
  let fixture: ComponentFixture<SamplePage13Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
