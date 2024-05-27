import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage12Page } from './sample-page12.page';

describe('SamplePage12Page', () => {
  let component: SamplePage12Page;
  let fixture: ComponentFixture<SamplePage12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
