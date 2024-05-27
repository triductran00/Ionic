import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage16Page } from './sample-page16.page';

describe('SamplePage16Page', () => {
  let component: SamplePage16Page;
  let fixture: ComponentFixture<SamplePage16Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
