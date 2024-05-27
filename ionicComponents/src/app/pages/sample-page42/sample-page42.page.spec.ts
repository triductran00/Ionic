import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage42Page } from './sample-page42.page';

describe('SamplePage42Page', () => {
  let component: SamplePage42Page;
  let fixture: ComponentFixture<SamplePage42Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
