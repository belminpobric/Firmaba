import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesplatnaComponent } from './besplatna.component';

describe('BesplatnaComponent', () => {
  let component: BesplatnaComponent;
  let fixture: ComponentFixture<BesplatnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesplatnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BesplatnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
