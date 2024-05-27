import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage61Page } from './sample-page61.page';

describe('SamplePage61Page', () => {
  let component: SamplePage61Page;
  let fixture: ComponentFixture<SamplePage61Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage61Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
