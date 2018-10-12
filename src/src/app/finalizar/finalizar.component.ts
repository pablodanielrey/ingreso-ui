import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.scss']
})
export class FinalizarComponent implements OnInit {

  public n:number=51;

  constructor() {
   setTimeout(() => {
     this.n = this.n + 50;
   }, 1);
 }


  ngOnInit() {
  }

}
