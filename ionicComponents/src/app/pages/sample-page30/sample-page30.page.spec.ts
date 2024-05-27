import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage30Page } from './sample-page30.page';

describe('SamplePage30Page', () => {
  let component: SamplePage30Page;
  let fixture: ComponentFixture<SamplePage30Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
