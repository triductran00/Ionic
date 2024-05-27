import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage28Page } from './sample-page28.page';

describe('SamplePage28Page', () => {
  let component: SamplePage28Page;
  let fixture: ComponentFixture<SamplePage28Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
