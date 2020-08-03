import { Component, OnInit } from '@angular/core';
import { Employee} from '../../employee.mode';

import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({

  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
employee: Employee;
id: number;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
  this.route.params
  .subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.employee = this.employeeService.getEmployee(this.id);
    }
  )
  
  
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    
  }

  onDeleteRecipe() {
    this.employeeService.deleteEmployee(this.id);
    this.router.navigate(['/employees']);
  }


}
