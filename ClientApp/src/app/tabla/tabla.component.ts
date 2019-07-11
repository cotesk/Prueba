import { Component, OnInit } from '@angular/core';
import {PacientesService} from '../services/pacientes.service'
import { Pacientes } from '../models/pacientes';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  pacientes:Pacientes[];
  constructor(private PacientesService:PacientesService)
  { }
  ngOnInit() {
  this.getAll();
  }
  getAll(){
  this.PacientesService.getAll().subscribe(pacientes=>this.pacientes=pacientes);
  }
}
