import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  n: number = 1;
  procesando: boolean = false;

  constructor() {
   setTimeout(() => {
     this.n = this.n + 5;
   }, 1);
 }

  ngOnInit() {
  }

}
