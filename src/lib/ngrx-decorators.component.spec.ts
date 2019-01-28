import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDecoratorsComponent } from './ngrx-decorators.component';

describe('NgrxDecoratorsComponent', () => {
  let component: NgrxDecoratorsComponent;
  let fixture: ComponentFixture<NgrxDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
