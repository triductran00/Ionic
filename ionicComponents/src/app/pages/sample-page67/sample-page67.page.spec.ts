import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage67Page } from './sample-page67.page';

describe('SamplePage67Page', () => {
  let component: SamplePage67Page;
  let fixture: ComponentFixture<SamplePage67Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage67Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
