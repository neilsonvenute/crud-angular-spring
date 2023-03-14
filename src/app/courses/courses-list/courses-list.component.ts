import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute) {}


  @Input() courses: Course[] = [];

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
