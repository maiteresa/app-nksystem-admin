import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasxcobrarComponent } from './cuentasxcobrar.component';

describe('CuentasxcobrarComponent', () => {
  let component: CuentasxcobrarComponent;
  let fixture: ComponentFixture<CuentasxcobrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasxcobrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasxcobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
