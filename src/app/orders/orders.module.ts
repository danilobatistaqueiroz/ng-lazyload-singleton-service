import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoursesModule } from '../list-courses/list-courses.module';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ListCoursesModule,
  ],
  exports: [
    OrdersComponent
  ],
  providers: []
})
export class OrdersModule { }
