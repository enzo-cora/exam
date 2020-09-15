import { Component, OnInit } from '@angular/core';
import {Article} from "../../model/article";
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list : Article[] | [] = []

  constructor(
    private coursesService : CoursesService,
  ) { }

  ngOnInit(): void {
    this.coursesService.articleSubject.subscribe(
      (list : Article[]) => this.list = list
    )
    this.coursesService.getAll()
  }



}
