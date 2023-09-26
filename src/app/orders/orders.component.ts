import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../list-courses/courses.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  //styleUrls: ['./pedidos.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public courses:CoursesService) { }

  ngOnInit(): void {
  }

  public add(course:string){
    this.courses.add(course);
    console.log(this.courses.courses);
  }

}
