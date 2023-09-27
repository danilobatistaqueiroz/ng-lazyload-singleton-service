import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingComponent } from './shopping.component';
import { FiltroArrayPipe } from '../filtro-array.pipe';
import { OrdersModule } from '../orders/orders.module';
import { CreateCoursesComponent } from '../create-courses/create-courses.component';
import { ListCoursesComponent } from '../list-courses/list-courses.component';
import { ListCoursesModule } from '../list-courses/list-courses.module';
import { CreateCoursesModule } from '../create-courses/create-courses.module';
import { ShoppingRoutingModule } from '../shopping/shopping-routing.module';

@NgModule({
  declarations: [
    ShoppingComponent,
    FiltroArrayPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListCoursesModule,
    CreateCoursesModule,
    ShoppingRoutingModule
  ],
  exports: [
    ShoppingComponent,
  ],
  providers: []
})
export class ShoppingModule { }
