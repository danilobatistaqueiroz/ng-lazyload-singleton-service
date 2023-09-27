import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../list-courses/courses.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  filtro: string='';

  constructor(public courses:CoursesService) { }

  ngOnInit(): void {
  }

  public add(course:string){
    this.courses.add(course);
    console.log(this.courses.courses);
  }

  valor2 = interval(1000).pipe(take(4));
}
