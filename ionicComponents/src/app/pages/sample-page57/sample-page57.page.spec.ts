import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage57Page } from './sample-page57.page';

describe('SamplePage57Page', () => {
  let component: SamplePage57Page;
  let fixture: ComponentFixture<SamplePage57Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage57Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
