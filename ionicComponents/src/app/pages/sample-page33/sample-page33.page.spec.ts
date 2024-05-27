import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage33Page } from './sample-page33.page';

describe('SamplePage33Page', () => {
  let component: SamplePage33Page;
  let fixture: ComponentFixture<SamplePage33Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
