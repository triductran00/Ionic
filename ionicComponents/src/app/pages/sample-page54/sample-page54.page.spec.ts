import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage54Page } from './sample-page54.page';

describe('SamplePage54Page', () => {
  let component: SamplePage54Page;
  let fixture: ComponentFixture<SamplePage54Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage54Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
