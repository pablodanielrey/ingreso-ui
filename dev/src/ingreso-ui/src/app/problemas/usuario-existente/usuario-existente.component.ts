import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-existente',
  templateUrl: './usuario-existente.component.html',
  styleUrls: ['./usuario-existente.component.scss']
})
export class UsuarioExistenteComponent implements OnInit {

  dni: string =  '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.dni = p.get('dni');
    });     
  }

}
