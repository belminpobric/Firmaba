import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReklamnaComponent } from './reklamna.component';

describe('ReklamnaComponent', () => {
  let component: ReklamnaComponent;
  let fixture: ComponentFixture<ReklamnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReklamnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReklamnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
