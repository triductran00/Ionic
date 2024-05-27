import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage19Page } from './sample-page19.page';

describe('SamplePage19Page', () => {
  let component: SamplePage19Page;
  let fixture: ComponentFixture<SamplePage19Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
