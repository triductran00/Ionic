import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage55Page } from './sample-page55.page';

describe('SamplePage55Page', () => {
  let component: SamplePage55Page;
  let fixture: ComponentFixture<SamplePage55Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage55Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
