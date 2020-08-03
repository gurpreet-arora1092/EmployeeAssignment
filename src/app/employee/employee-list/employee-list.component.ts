import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.mode';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[];
  subscription: Subscription;
  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.subscription = this.employeeService.employeeChanged
    .subscribe(
      (employee: Employee[]) => {
        this.employee = employee;
      }
    );
  this.employee = this.employeeService.getEmployees();

  }


  onNewEmployee() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
