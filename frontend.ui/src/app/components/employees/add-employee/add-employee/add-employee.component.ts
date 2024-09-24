import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../../../../models/employee.model';
import { EmployeesService } from '../../../../services/employees.service';
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private employeeService:EmployeesService, private router:Router){}

  addEmployee(){
    this.addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {
      this.router.navigate(['employees']); 
      },
      error: (response) =>{
        console.log(response);
      }
  });
}
}
