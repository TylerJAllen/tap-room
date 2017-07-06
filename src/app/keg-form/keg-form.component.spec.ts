/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KegFormComponent } from './keg-form.component';

describe('KegFormComponent', () => {
  let component: KegFormComponent;
  let fixture: ComponentFixture<KegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
