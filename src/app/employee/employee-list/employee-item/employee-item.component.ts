import { Component, OnInit , Input} from '@angular/core';
import { Employee } from 'src/app/employee.mode';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {


  @Input() employee: Employee;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
