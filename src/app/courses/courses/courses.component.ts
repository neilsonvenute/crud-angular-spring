import { Component, OnInit } from '@angular/core';
import { first, Observable, take, tap } from 'rxjs';

import { CoursesService } from '../services/courses.service';
import { Course } from './../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private courserService: CoursesService) {
    this.courses = this.courserService.list()
      .pipe(
        first(),
        tap(courses => console.log(courses))
      );
  }

  ngOnInit(): void {

  }

}
