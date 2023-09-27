import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCoursesComponent } from './create-courses.component';
import { CoursesService } from '../list-courses/courses.service';


@NgModule({
  declarations: [
    CreateCoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCoursesComponent
  ],
  providers: [CoursesService]
})
export class CreateCoursesModule { }
