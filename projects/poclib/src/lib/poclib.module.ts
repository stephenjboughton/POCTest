import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { POCLibComponent } from './poclib.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    POCLibComponent,
    LoginComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    POCLibComponent,
    LoginComponent
  ],
  providers: [
  ]
})
export class POCLibModule { }
