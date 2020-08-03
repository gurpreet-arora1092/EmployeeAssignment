import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
