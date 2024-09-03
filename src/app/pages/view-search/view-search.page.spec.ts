import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSearchPage } from './view-search.page';

describe('ViewSearchPage', () => {
  let component: ViewSearchPage;
  let fixture: ComponentFixture<ViewSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
