import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DniNoExisteComponent } from './dni-no-existe.component';

describe('DniNoExisteComponent', () => {
  let component: DniNoExisteComponent;
  let fixture: ComponentFixture<DniNoExisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniNoExisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DniNoExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
