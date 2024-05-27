import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage38Page } from './sample-page38.page';

describe('SamplePage38Page', () => {
  let component: SamplePage38Page;
  let fixture: ComponentFixture<SamplePage38Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage38Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
