import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage14Page } from './sample-page14.page';

describe('SamplePage14Page', () => {
  let component: SamplePage14Page;
  let fixture: ComponentFixture<SamplePage14Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
