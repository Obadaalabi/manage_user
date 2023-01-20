/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_userComponent } from './add_user.component';

describe('Add_userComponent', () => {
  let component: Add_userComponent;
  let fixture: ComponentFixture<Add_userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
