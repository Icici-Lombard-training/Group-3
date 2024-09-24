import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = env.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees')
  }

  addEmployee(addEmployeeRequest:Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees',addEmployeeRequest);
  }

  getEmployee(id:string): Observable<Employee>{

    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }

  updateEmployee(id:string, updateEmployeeRequest: Employee): Observable<Employee>{

    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest);
  }

  deleteEmployee(id:string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }
}
