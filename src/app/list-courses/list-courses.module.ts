import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoursesComponent } from './list-courses.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    ListCoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [CoursesService]
})
export class ListCoursesModule { }
