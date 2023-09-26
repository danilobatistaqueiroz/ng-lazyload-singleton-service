import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../list-courses/courses.service';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  //styleUrls: ['./criar-cursos.component.css'],
  //providers:[CursosService]
})
export class CreateCoursesComponent implements OnInit {

  constructor(public courses:CoursesService) { }

  ngOnInit(): void {
  }

  public add(course:string){
    this.courses.add(course);
    
  }
  public listar(){
    return this.courses.courses;
  }

}
