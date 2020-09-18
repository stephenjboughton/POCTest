import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { POCLibComponent } from './poclib.component';
import { POCLibService } from './poclib.service';



@NgModule({
  declarations: [POCLibComponent],
  imports: [
    FormsModule
  ],
  exports: [POCLibComponent],
  providers: [POCLibService]
})
export class POCLibModule { }
