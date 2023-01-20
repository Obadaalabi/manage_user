/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Information_userComponent } from './information_user.component';

describe('Information_userComponent', () => {
  let component: Information_userComponent;
  let fixture: ComponentFixture<Information_userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Information_userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Information_userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
