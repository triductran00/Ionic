import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage5Page } from './sample-page5.page';

describe('SamplePage5Page', () => {
  let component: SamplePage5Page;
  let fixture: ComponentFixture<SamplePage5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
