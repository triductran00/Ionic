import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage6Page } from './sample-page6.page';

describe('SamplePage6Page', () => {
  let component: SamplePage6Page;
  let fixture: ComponentFixture<SamplePage6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
