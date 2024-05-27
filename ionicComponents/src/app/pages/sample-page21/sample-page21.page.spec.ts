import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage21Page } from './sample-page21.page';

describe('SamplePage21Page', () => {
  let component: SamplePage21Page;
  let fixture: ComponentFixture<SamplePage21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
