import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8089/api/employees";
  private baseurl="http://localhost:8089/api/addemployees";
  private baseURL2="http://localhost:8089/api/userlogin";
  
    constructor(private httpClient:HttpClient) { }
  
    getEmployeesList(): Observable<Employee[]>{
      return this.httpClient.get<Employee[]>(this.baseURL);
    }
    
    createEmployee(employee:Employee): Observable<object>{
      
      return this.httpClient.post((this.baseurl), employee);
    }

    userlogin(employee:Employee): Observable<object>{
      console.log(employee)
      return this.httpClient.post((this.baseURL2),employee);
    }
    
  
  }
  
