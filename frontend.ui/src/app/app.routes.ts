import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
export const routes: Routes = [
   
    {
        path:'',
        component: EmployeeListComponent
    },
    {
        path:'employees',
        component: EmployeeListComponent
    },
    {
        path:'employees/add',
        component: AddEmployeeComponent
    },
    {
        path:'employees/edit/:id',
        component: EditEmployeeComponent
    }
    
];
