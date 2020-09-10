import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursesService} from "../../services/courses.service";
import {Article} from "../../model/article";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  articleForm : FormGroup
  @Input() item : Article

  constructor(
    private coursesService : CoursesService,
    private formBuilder : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initList()
  }

  initList(): void {
    this.articleForm = this.formBuilder.group({
      name : [this.item.name,Validators.required],
      complete : [this.item.complete]
    })
  }

  onSubmit(){
    this.coursesService.updateOne(this.item._id,this.articleForm.value).subscribe()
  }

  onDelete(){
    this.coursesService.deleteOne(this.item._id)
  }


}
