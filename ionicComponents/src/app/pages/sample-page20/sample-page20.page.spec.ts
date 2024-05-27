import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage20Page } from './sample-page20.page';

describe('SamplePage20Page', () => {
  let component: SamplePage20Page;
  let fixture: ComponentFixture<SamplePage20Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
