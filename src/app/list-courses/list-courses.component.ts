import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  //styleUrls: ['./listar-cursos.component.css'],
  //providers:[CursosService]
})
export class ListCoursesComponent implements OnInit {

  constructor(public courses:CoursesService) { }

  ngOnInit(): void {
  }

  public add(course:string){
    this.courses.add(course);
    console.log(this.courses.courses);
  }
  public listar(){
    return this.courses.courses;
  }

}
