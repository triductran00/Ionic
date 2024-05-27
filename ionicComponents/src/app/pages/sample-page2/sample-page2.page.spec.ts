import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage2Page } from './sample-page2.page';

describe('SamplePage2Page', () => {
  let component: SamplePage2Page;
  let fixture: ComponentFixture<SamplePage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
