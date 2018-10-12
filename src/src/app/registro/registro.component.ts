import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public n:number=1;

  constructor() {
   setTimeout(() => {
     this.n = this.n + 5;
   }, 1);
 }

  ngOnInit() {
  }

}
