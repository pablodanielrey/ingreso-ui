import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.scss']
})
export class CodigoComponent implements OnInit {

  n: number = 6;
  procesando: boolean = false;

  constructor() {
   setTimeout(() => {
     this.n = this.n + 44;
   }, 1);
 }


  ngOnInit() {
  }

}
