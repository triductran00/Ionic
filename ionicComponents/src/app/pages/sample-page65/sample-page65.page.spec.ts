import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage65Page } from './sample-page65.page';

describe('SamplePage65Page', () => {
  let component: SamplePage65Page;
  let fixture: ComponentFixture<SamplePage65Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage65Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
