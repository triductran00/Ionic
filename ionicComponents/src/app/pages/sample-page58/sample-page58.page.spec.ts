import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage58Page } from './sample-page58.page';

describe('SamplePage58Page', () => {
  let component: SamplePage58Page;
  let fixture: ComponentFixture<SamplePage58Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage58Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
