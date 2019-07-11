import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pacientes } from '../models/pacientes';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const Pacientes = [
    { id: 11, valorServivcio:5000000, salario:120000, tarifa:8000000, valorCopago:6000000 },
  
    ];
    return {Pacientes};
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.





    constructor() { }
    

}
