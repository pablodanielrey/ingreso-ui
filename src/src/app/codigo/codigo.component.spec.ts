import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoComponent } from './codigo.component';

describe('CodigoComponent', () => {
  let component: CodigoComponent;
  let fixture: ComponentFixture<CodigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
