import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage17Page } from './sample-page17.page';

describe('SamplePage17Page', () => {
  let component: SamplePage17Page;
  let fixture: ComponentFixture<SamplePage17Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
