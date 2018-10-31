import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dni-no-existe',
  templateUrl: './dni-no-existe.component.html',
  styleUrls: ['./dni-no-existe.component.scss']
})
export class DniNoExisteComponent implements OnInit {

  dni: string =  '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.dni = p.get('dni');
    });    
  }

}
