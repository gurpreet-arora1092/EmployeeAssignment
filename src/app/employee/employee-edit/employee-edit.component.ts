import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Employee} from '../../employee.mode';

import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  id: number;
  editMode = false;
  employeeForm: FormGroup;




  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit()  {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }



  onSubmit() {
    
    if (this.editMode) {
      this.employeeService.updateEmployee(this.id, this.employeeForm.value);
    } else {
      this.employeeService.addEmployee(this.employeeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }



  private initForm() {
    let employeeFirstName = '';
    let employeeLastName = '';
  

    if (this.editMode) {
      const employee = this.employeeService.getEmployee(this.id);
      employeeFirstName = employee.firstName;
      employeeLastName = employee.lastName;
     
     
        }
      }
    }

   
  



