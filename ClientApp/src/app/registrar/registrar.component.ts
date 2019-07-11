import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';
import { Pacientes } from '../models/pacientes';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private PacientesService: PacientesService) { }
  paciente: Pacientes;
  ngOnInit() {
  this.paciente = {id :0,cedula:0,  valorServivcio: 0, salario:0, tarifa: 0, valorCopago: 0  };
  }

  // voidCalcularTarifa(){
  //   if(this.paciente.salario>2500000){
  //     this.paciente.tarifa=0.2;
  //     this.paciente.valorCopago=((this.paciente.tarifa)*this.paciente.valorServivcio);
  //   }else{
  //     this.paciente.tarifa=0.1;
  //     this.paciente.valorCopago=((this.paciente.tarifa)*this.paciente.valorServivcio);
  //   }
   
  // }



  add() {

    
    // this.voidCalcularTarifa();
  this.PacientesService.addPacientes(this.paciente)
 
  .subscribe(task => {
  alert('Se agrego una nueva tarea')
  });
  }




}
