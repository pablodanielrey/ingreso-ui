import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioExistenteComponent } from './usuario-existente.component';

describe('UsuarioExistenteComponent', () => {
  let component: UsuarioExistenteComponent;
  let fixture: ComponentFixture<UsuarioExistenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioExistenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
