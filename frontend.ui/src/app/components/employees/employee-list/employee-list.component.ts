import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees:Employee[] = [];
  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void{
    this.employeeService.getAllEmployee().subscribe({
      next: (employees) => {
        this.employees = employees;
    },
    error: (response) =>{
      console.log(response);
    }
    })
  }
}
