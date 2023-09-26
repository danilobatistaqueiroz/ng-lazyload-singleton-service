import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  courses=['Java','ES6','Nestjs','Mongo','Redux','Kafka','Cloud','Microservices'];

  constructor() { 
    console.log('courses services');
  }

  public add(course:string){
    this.courses.push(course);
  }
}
