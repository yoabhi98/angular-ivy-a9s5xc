import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [
    AppComponent,
    AppComponent,
    AboutComponent,
    EmployeeComponent,
    EmployeesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
