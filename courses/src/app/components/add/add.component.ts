import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  articleForm : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private coursesService : CoursesService,
  ) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      name : ['',Validators.required],
    })
  }

  onSubmit(){
    this.coursesService.addOne(this.articleForm.value)
  }

}
