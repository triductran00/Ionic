import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage56Page } from './sample-page56.page';

describe('SamplePage56Page', () => {
  let component: SamplePage56Page;
  let fixture: ComponentFixture<SamplePage56Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage56Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
