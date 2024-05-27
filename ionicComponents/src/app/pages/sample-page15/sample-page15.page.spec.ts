import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage15Page } from './sample-page15.page';

describe('SamplePage15Page', () => {
  let component: SamplePage15Page;
  let fixture: ComponentFixture<SamplePage15Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
