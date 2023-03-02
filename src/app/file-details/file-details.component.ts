import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  @Input() fileUpload!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
