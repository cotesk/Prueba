import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pacientes} from '../models/pacientes';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
  {
  }
  
  
  
  
  /** POST: add a new task to the server */
  addPacientes (paciente: Pacientes): Observable<Pacientes> {
  return this.http.post<Pacientes>(this.baseUrl+'api/Paciente', paciente, httpOptions).pipe(
  tap((newPacientes: Pacientes) => this.log(`added newPacientes w/ id=${newPacientes.cedula}`)),
  catchError(this.handleError<Pacientes>('addPacientes'))
  );
  
  }
  getAll():Observable<Pacientes[]>
  {
  return this.http.get<Pacientes[]>(this.baseUrl+'api/Paciente').pipe(
  tap(_=>this.log('Se Consulta la información')),
  catchError(this.handleError<Pacientes[]>('getAll',[]))
  );
  }
  get(cedula: number): Observable<Pacientes>
  {
  const url = `${this.baseUrl + 'api/Paciente'}/${cedula}`;
  return this.http.get<Pacientes>(url).pipe(
  tap(_ => this.log(`fetched Paciente id=${cedula}`)),
  catchError(this.handleError<Pacientes>(`getHero id=${cedula}`))
  );
  }

  update (paciente: Pacientes): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/Paciente'}/${paciente.cedula}`;
    return this.http.put(url, paciente, httpOptions).pipe(
    tap(_ => this.log(`updated libro isbn=${paciente.cedula}`)),
    catchError(this.handleError<any>('libro'))
    );
    }


  delete (paciente: Pacientes | number): Observable<Pacientes> {
    const cedula = typeof paciente === 'number' ? paciente : paciente.cedula;
    const url =
    
    `${this.baseUrl + 'api/Paciente'}/${cedula}`;
    
    return this.http.delete<Pacientes>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted libro isbn=${cedula}`)),
    catchError(this.handleError<Pacientes>('deleteTask'))
    );
    }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
    }
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
    alert(`TaskService: ${message}`);
    }
}
