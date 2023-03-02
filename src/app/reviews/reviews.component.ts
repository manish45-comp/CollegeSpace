import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  Feedback:any = [];

  constructor(public apiservice:ApiService) {
    this.fetchfeedback();
  }

  ngOnInit(): void {
  }
  fetchfeedback(){
    this.apiservice.getfeedback().subscribe((data)=>{
      this.Feedback = data;
    })
  }
}
