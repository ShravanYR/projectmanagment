import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  employee : Employee = new Employee();

  constructor(private employeeService:EmployeeService,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  
  userlogin() {
    console.log(this.employee)
    this.employeeService.userlogin(this.employee).subscribe(data=>{
      alert("login successfull")
      this.goToadb();
    });
  }
    
  goToadb(){
    
    this.router.navigate([''])

  
  }
}