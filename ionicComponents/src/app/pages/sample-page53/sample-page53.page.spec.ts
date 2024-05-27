import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage53Page } from './sample-page53.page';

describe('SamplePage53Page', () => {
  let component: SamplePage53Page;
  let fixture: ComponentFixture<SamplePage53Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage53Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
