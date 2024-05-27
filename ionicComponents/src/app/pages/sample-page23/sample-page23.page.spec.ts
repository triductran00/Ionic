import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage23Page } from './sample-page23.page';

describe('SamplePage23Page', () => {
  let component: SamplePage23Page;
  let fixture: ComponentFixture<SamplePage23Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
