import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage25Page } from './sample-page25.page';

describe('SamplePage25Page', () => {
  let component: SamplePage25Page;
  let fixture: ComponentFixture<SamplePage25Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
