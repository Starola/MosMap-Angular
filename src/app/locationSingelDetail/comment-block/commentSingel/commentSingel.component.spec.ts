/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentSingelComponent } from './commentSingel.component';

describe('CommentSingelComponent', () => {
  let component: CommentSingelComponent;
  let fixture: ComponentFixture<CommentSingelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSingelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSingelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
