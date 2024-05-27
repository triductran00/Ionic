import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage18Page } from './sample-page18.page';

describe('SamplePage18Page', () => {
  let component: SamplePage18Page;
  let fixture: ComponentFixture<SamplePage18Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
