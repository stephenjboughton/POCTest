import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { POCLibComponent } from './poclib.component';



@NgModule({
  declarations: [POCLibComponent],
  imports: [
    FormsModule
  ],
  exports: [POCLibComponent]
})
export class POCLibModule { }
