import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListCoursesModule } from '../list-courses/list-courses.module';
import { OrdersComponent } from './orders.component';
import { FiltroArrayPipe } from '../filtro-array.pipe';

@NgModule({
  declarations: [
    OrdersComponent,
    FiltroArrayPipe
  ],
  imports: [
    CommonModule,
    ListCoursesModule,
    FormsModule,
  ],
  exports: [
    OrdersComponent
  ],
  providers: []
})
export class OrdersModule { }
