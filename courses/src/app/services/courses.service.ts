import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Article} from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http : HttpClient
  ) { }

  articleSubject = new Subject<[Article]>()
  url = location.protocol +'//'+ location.hostname + '/api1'  + '/article'


  emmitArticles(content) {
    this.articleSubject.next(content)
  }

  getAll() {
    this.http.get(this.url).subscribe(
      (articles : Article[]) => this.emmitArticles(articles)
    )
  }

  addOne(content){
    this.http.post(this.url + '/add/', content).subscribe(
      ()=> this.getAll()
    )
  }

  updateOne(id,content){
    return this.http.put(this.url + '/update/' + id, content)

  }

  deleteOne(id){
    this.http.delete(this.url + '/delete/' + id).subscribe(
      ()=> this.getAll()
    )
  }


}
